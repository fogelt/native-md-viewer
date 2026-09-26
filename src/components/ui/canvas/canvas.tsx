import { Check, Eye, Pencil } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { MarkdownView } from "../markdown-view";
import { ToolBar } from "../tool-bar";

interface CanvasProps {
  value: string;
  onChange: (value: string) => void;
  fileName: string | null;
  saved: boolean;
  selection: {
    start: number;
    end: number;
  };
  onFormat: (before: string, after?: string) => void;
  onAssist: () => void;
  isAssisting: boolean;
  onSelectionChange: (start: number, end: number) => void;
}

const surface =
  "rounded-lg border border-zinc-200 bg-white shadow-sm";

export function Canvas({
  value,
  onChange,
  fileName,
  saved,
  selection,
  onFormat,
  onAssist,
  isAssisting,
  onSelectionChange,
}: CanvasProps) {
  const [preview, setPreview] = useState(false);

  return (
    <View className="flex-1 w-full">
      <View className="flex-1 flex-row gap-3">
        <View className="flex-1">
          {preview ? (
            <View className={`${surface} flex-1 overflow-hidden`}>
              <MarkdownView content={value} />
            </View>
          ) : (
            <TextInput
              value={value}
              selection={selection}
              onChangeText={onChange}
              onSelectionChange={(event) => {
                const { start, end } =
                  event.nativeEvent.selection;

                onSelectionChange(start, end);
              }}
              multiline
              textAlignVertical="top"
              className={`${surface} flex-1 p-4 font-mono text-base leading-6 text-zinc-900`}
            />
          )}
        </View>

        <View className="w-12 items-center">
          {!preview && (
            <ToolBar
              onFormat={onFormat}
              onAssist={onAssist}
              isAssisting={isAssisting}
            />
          )}

          <Pressable
            onPress={() => setPreview((value) => !value)}
            accessibilityLabel={
              preview ? "Edit" : "Preview"
            }
            className="mt-1 items-center justify-center rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            {preview ? (
              <Pencil
                size={18}
                color="#3f3f46"
              />
            ) : (
              <Eye
                size={18}
                color="#3f3f46"
              />
            )}
          </Pressable>
        </View>
      </View>

      <View className="flex-row items-center pt-2">
        <View className="flex-1 flex-row items-center gap-1.5">
          {saved && (
            <Check
              size={14}
              color="#60a5fa"
            />
          )}

          <Text
            numberOfLines={1}
            className="flex-1 text-xs text-zinc-400"
          >
            {fileName ?? "Untitled file"}
          </Text>
        </View>
      </View>
    </View>
  );
}