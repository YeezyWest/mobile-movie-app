import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect, useState } from 'react';
import { SaveProvider } from '../context/SaveContext';
import "../lib/appwrite";
import "./global.css";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(Ionicons.font);
      await SystemUI.setBackgroundColorAsync('#000000');
      setLoaded(true);
    }
    loadFonts();
  }, []);

  if (!loaded) return null;

  return (
    <SaveProvider>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </SaveProvider>
  );
}
