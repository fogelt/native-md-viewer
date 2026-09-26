import { markdownApi } from "@/api/client";
import { FileItem } from "@/components/ui";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function FilesPage() {
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      setLoading(true);

      const response =
        await markdownApi.apiMarkdownAllFilesGetRaw();

      const data = await response.raw.json();

      setFiles(data);
      setError(null);
    } catch (err: any) {
      setError(err?.message || "Failed to fetch files");
    } finally {
      setLoading(false);
    }
  };

  const handleImport = async (fileName: string) => {
    try {
      const response =
        await markdownApi.apiMarkdownFileNameGetRaw({
          fileName,
        });

      const content = await response.raw.text();

      router.push({
        pathname: "/",
        params: {
          content,
          fileName,
        },
      });
    } catch (err) {
      console.error("Failed to import file:", err);
    }
  };

  const handleDelete = async (fileName: string) => {
    try {
      setFiles((prev) =>
        prev.filter((file) => file !== fileName)
      );

      await markdownApi.apiMarkdownFileNameDelete({
        fileName,
      });
    } catch (err) {
      console.error("Failed to delete file:", err);
      await loadFiles();
    }
  };

  const handleDownload = async (fileName: string) => {
    try {
      const response =
        await markdownApi.apiMarkdownFileNameGetRaw({
          fileName,
        });

      const content = await response.raw.text();

      console.log(
        `Downloaded ${fileName}:`,
        content
      );

    } catch (err) {
      console.error("Failed to download file:", err);
    }
  };

  const handleUpload = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: ["text/markdown", "text/plain"],
          copyToCacheDirectory: true,
        });

      if (result.canceled) return;

      const file = result.assets[0];

      const response =
        await fetch(file.uri);

      const blob = await response.blob();

      const rawRes =
        await markdownApi.apiMarkdownUploadPostRaw({
          file: new File(
            [blob],
            file.name,
            {
              type:
                file.mimeType ||
                "text/markdown",
            }
          ),
        });

      const textData =
        await rawRes.raw.text();

      let newFileName = file.name;

      try {
        const json = JSON.parse(textData);

        newFileName =
          json.fileName ||
          json.FileName ||
          file.name;
      } catch {
        if (textData.trim()) {
          newFileName = textData.trim();
        }
      }

      setFiles((prev) =>
        prev.includes(newFileName)
          ? prev
          : [...prev, newFileName]
      );

      const content =
        await (await fetch(file.uri)).text();

      router.push({
        pathname: "/",
        params: {
          content,
          fileName: newFileName,
        },
      });
    } catch (err) {
      console.error("Failed to upload file:", err);
    }
  };

  return (
    <ScrollView className="flex-1 bg-zinc-50 px-4 pt-16 mb-20 pb-2">
      <View className="mb-6 flex-row items-center justify-between">
        <Text className="text-2xl font-semibold tracking-tight text-zinc-900">
          Server Files
        </Text>

        <Pressable
          onPress={handleUpload}
          className="rounded-lg border border-zinc-200 bg-white px-4 py-2 shadow-sm active:bg-zinc-100"
        >
          <Text className="text-sm font-medium text-zinc-700">
            Import
          </Text>
        </Pressable>
      </View>

      {loading && (
        <View className="flex-row items-center gap-2">
          <ActivityIndicator
            size="small"
            color="#71717a"
          />

          <Text className="text-sm text-zinc-500">
            Loading files...
          </Text>
        </View>
      )}

      {error && (
        <View className="rounded-lg border border-red-200 bg-red-50 p-4">
          <Text className="text-sm text-red-600">
            {error}
          </Text>

          <Text className="mt-1 text-xs text-red-500">
            Make sure your backend is running.
          </Text>
        </View>
      )}

      {!loading &&
        !error &&
        files.length === 0 && (
          <Text className="text-sm text-zinc-500">
            No markdown files found on the server.
          </Text>
        )}

      <View className="gap-3">
        {files.map((file) => (
          <FileItem
            key={file}
            fileName={file}
            onImport={handleImport}
            onDelete={handleDelete}
            onDownload={handleDownload}
          />
        ))}
      </View>
    </ScrollView>
  );
}