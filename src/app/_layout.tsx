import { Navbar } from "@/components/ui";
import { Stack } from "expo-router";
import "./global.css";


export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Navbar />
    </>
  );
}
