import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import "./global.css";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(Ionicons.font);
      setLoaded(true);
    }
    loadFonts();
  }, []);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
