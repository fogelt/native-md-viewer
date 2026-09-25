
import { router, usePathname } from "expo-router";
import { Search, SquarePen } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export function Navbar() {
  const pathname = usePathname();

  const canvasActive = pathname === "/";
  const filesActive = pathname === "/files";

  return (
    <View className="absolute bottom-0 left-0 right-0 h-20 flex-row items-center justify-center gap-8 border-t border-zinc-200 bg-white px-6 shadow-sm">
      <Pressable
        onPress={() => router.push("/")}
        className="flex-row items-center gap-3 py-2"
      >
        <SquarePen
          size={16}
          color={canvasActive ? "#18181b" : "#a1a1aa"}
        />

        <Text
          className={
            canvasActive
              ? "text-sm font-medium uppercase tracking-widest text-zinc-900"
              : "text-sm uppercase tracking-widest text-zinc-400"
          }
        >
          Canvas
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/files")}
        className="flex-row items-center gap-3 py-2"
      >
        <Search
          size={16}
          color={filesActive ? "#18181b" : "#a1a1aa"}
        />

        <Text
          className={
            filesActive
              ? "text-sm font-medium uppercase tracking-widest text-zinc-900"
              : "text-sm uppercase tracking-widest text-zinc-400"
          }
        >
          Files
        </Text>
      </Pressable>
    </View>
  );
}