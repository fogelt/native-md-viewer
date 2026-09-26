import { markdownApi } from "@/api/client";
import { Canvas } from "@/components/ui";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

export default function CanvasPage() {
  const [content, setContent] = useState("");
  const [isAssisting, setIsAssisting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [hasEdited, setHasEdited] = useState(false);

  const [selection, setSelection] = useState({
    start: 0,
    end: 0,
  });

  const selectionRef = useRef({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    if (!hasEdited) return;

    const timeout = setTimeout(async () => {
      try {
        const file = new File(
          [content],
          fileName || "untitled.md",
          {
            type: "text/markdown",
          }
        );

        if (!fileName) {
          const rawRes =
            await markdownApi.apiMarkdownUploadPostRaw({
              file,
            });

          const textData = await rawRes.raw.text();

          let newName = "";

          try {
            const json = JSON.parse(textData);
            newName = json.fileName || json.FileName;
          } catch {
            newName = textData;
          }

          if (newName) {
            setFileName(newName);
          }
        } else {
          await markdownApi.apiMarkdownFileNamePutRaw({
            fileName,
            file,
          });
        }

        setSaved(true);
        setHasEdited(false);
      } catch (error) {
        console.error("Save failed:", error);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [content, fileName, hasEdited]);

  const handleSelectionChange = (start: number, end: number) => {
    const nextSelection = {
      start,
      end,
    };

    selectionRef.current = nextSelection;
    setSelection(nextSelection);
  };

  const format = (before: string, after = "") => {
    const { start, end } = selectionRef.current;

    const selected = content.slice(start, end);

    const nextContent =
      content.slice(0, start) +
      before +
      selected +
      after +
      content.slice(end);

    const nextSelection = {
      start: start + before.length,
      end: start + before.length + selected.length,
    };

    selectionRef.current = nextSelection;

    setContent(nextContent);
    setSaved(false);
    setHasEdited(true);
    setSelection(nextSelection);
  };

  const assist = async () => {
    if (!content.trim() || isAssisting) return;

    setIsAssisting(true);

    try {
      const response =
        await markdownApi.apiMarkdownBeautifyPostRaw({
          body: content,
        });

      const beautifiedMarkdown =
        await response.raw.text();

      if (beautifiedMarkdown) {
        setContent(beautifiedMarkdown);
        setSaved(false);
        setHasEdited(true);
      }
    } catch (error) {
      console.error(
        "Failed to beautify markdown:",
        error
      );
    } finally {
      setIsAssisting(false);
    }
  };

  return (
    <View className="flex-1 bg-zinc-50 px-4 pb-20 pt-4">
      <Canvas
        value={content}
        selection={selection}
        onChange={(value) => {
          setContent(value);
          setSaved(false);
          setHasEdited(true);
        }}
        onSelectionChange={handleSelectionChange}
        onFormat={format}
        onAssist={assist}
        isAssisting={isAssisting}
        fileName={fileName}
        saved={saved}
      />
    </View>
  );
}