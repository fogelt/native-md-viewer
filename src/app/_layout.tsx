import { Navbar } from "@/components/ui";
import { Stack } from "expo-router";
import "./global.css";


export default function RootLayout() {
  return (
    <>
      <Navbar />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
