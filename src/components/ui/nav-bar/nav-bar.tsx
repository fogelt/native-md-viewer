import { router } from "expo-router";
import { House, Search } from "lucide-react-native";
import { Pressable, View } from "react-native";

export function Navbar() {
  return (
    <View className="h-20 flex-row items-end justify-center gap-10 bg-blue-300 pb-3">
      <Pressable onPress={() => router.push("/")}>
        <House size={24} />
      </Pressable>

      <Pressable onPress={() => router.push("/files")}>
        <Search size={24} />
      </Pressable>
    </View>
  );
}