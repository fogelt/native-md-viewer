import {
  Download,
  FileText,
  Pencil,
  Trash2,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface FileItemProps {
  fileName: string;
  onImport: (fileName: string) => void;
  onDelete: (fileName: string) => void;
  onDownload: (fileName: string) => void;
}

export const FileItem = ({
  fileName,
  onImport,
  onDelete,
  onDownload,
}: FileItemProps) => {
  return (
    <View className="flex-row items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <View className="flex-1 flex-row items-center gap-3">
        <FileText
          size={20}
          color="#a1a1aa"
        />

        <Text
          numberOfLines={1}
          className="flex-1 text-sm font-medium text-zinc-800"
        >
          {fileName}
        </Text>
      </View>

      <View className="ml-3 flex-row items-center gap-1">
        <Pressable
          onPress={() => onImport(fileName)}
          className="rounded-md p-2 active:bg-zinc-100"
          accessibilityLabel="Edit file"
        >
          <Pencil
            size={17}
            color="#71717a"
          />
        </Pressable>

        <Pressable
          onPress={() => onDownload(fileName)}
          className="rounded-md p-2 active:bg-zinc-100"
          accessibilityLabel="Download file"
        >
          <Download
            size={17}
            color="#71717a"
          />
        </Pressable>

        <Pressable
          onPress={() => onDelete(fileName)}
          className="rounded-md p-2 active:bg-red-50"
          accessibilityLabel="Delete file"
        >
          <Trash2
            size={17}
            color="#71717a"
          />
        </Pressable>
      </View>
    </View>
  );
}