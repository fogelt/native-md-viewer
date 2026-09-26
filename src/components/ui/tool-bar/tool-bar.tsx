import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Loader2,
  Quote,
  SquareTerminal,
  Wand,
} from "lucide-react-native";
import { Pressable, View } from "react-native";

interface ToolBarProps {
  onFormat: (before: string, after?: string) => void;
  onAssist: () => void;
  isAssisting: boolean;
}

export function ToolBar({
  onFormat,
  onAssist,
  isAssisting,
}: ToolBarProps) {
  return (
    <View className="rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
      <View className="gap-1">
        <ToolButton
          onPress={() => onFormat("**", "**")}
          icon={<Bold size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("*", "*")}
          icon={<Italic size={18} />}
        />
      </View>

      <Divider />

      <View className="gap-1">
        <ToolButton
          onPress={() => onFormat("# ")}
          icon={<Heading1 size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("## ")}
          icon={<Heading2 size={18} />}
        />
      </View>

      <Divider />

      <View className="gap-1">
        <ToolButton
          onPress={() => onFormat("- ")}
          icon={<List size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("1. ")}
          icon={<ListOrdered size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("> ")}
          icon={<Quote size={18} />}
        />
      </View>

      <Divider />

      <View className="gap-1">
        <ToolButton
          onPress={() => onFormat("```\n", "\n```")}
          icon={<Code size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("```bash\n", "\n```")}
          icon={<SquareTerminal size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("[", "](url)")}
          icon={<Link size={18} />}
        />

        <ToolButton
          onPress={() => onFormat("![", "](url)")}
          icon={<Image size={18} />}
        />
      </View>

      <Divider />

      <Pressable
        onPress={onAssist}
        disabled={isAssisting}
        className="items-center justify-center rounded-md border border-dashed border-blue-300 bg-blue-200 p-2"
      >
        {isAssisting ? (
          <Loader2
            size={16}
            color="#3f3f46"
            className="animate-spin"
          />
        ) : (
          <Wand
            size={16}
            color="#3f3f46"
          />
        )}
      </Pressable>
    </View>
  );
}

function ToolButton({
  onPress,
  icon,
}: {
  onPress: () => void;
  icon: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center rounded-md p-2 active:bg-zinc-100"
    >
      {icon}
    </Pressable>
  );
}

function Divider() {
  return (
    <View className="my-2 h-px bg-zinc-200" />
  );
}