import { Check, Columns2, Pencil } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
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
  const [split, setSplit] = useState(false);

  return (
    <View className="relative flex-1 w-full">
      <View className="absolute right-3 top-3 z-50">
        <ToolBar
          onFormat={onFormat}
          onAssist={onAssist}
          isAssisting={isAssisting}
        />
      </View>

      <View className="flex-1 flex-row gap-2 pt-12">
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
          className={`${surface} flex-1 p-4 pr-16 font-mono text-base leading-6 text-zinc-900`}
        />

        {split && (
          <View
            className={`${surface} w-1/2 flex-1 overflow-hidden p-4`}
          >
            <Text className="text-zinc-900">
              {value}
            </Text>
          </View>
        )}
      </View>

      <View className="flex-row items-center justify-between pt-2">
        <View className="flex-row items-center gap-1.5">
          {saved && (
            <Check
              size={14}
              color="#60a5fa"
            />
          )}

          <Text
            numberOfLines={1}
            className="max-w-64 text-xs text-zinc-400"
          >
            {fileName ?? "Untitled file"}
          </Text>
        </View>

        <View className="flex-row rounded-md bg-zinc-100 p-0.5">
          <Pressable
            onPress={() => setSplit(false)}
            accessibilityLabel="Edit"
            className={`rounded p-1.5 ${!split ? "bg-white shadow-sm" : ""
              }`}
          >
            <Pencil
              size={14}
              color={!split ? "#3f3f46" : "#a1a1aa"}
            />
          </Pressable>

          <Pressable
            onPress={() => setSplit(true)}
            accessibilityLabel="Split view"
            className={`rounded p-1.5 ${split ? "bg-white shadow-sm" : ""
              }`}
          >
            <Columns2
              size={14}
              color={split ? "#3f3f46" : "#a1a1aa"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}