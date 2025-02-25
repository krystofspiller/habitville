import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from 'expo-font'

import "../global.css"
import { useEffect } from "react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <ConvexProvider client={convex}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
      </Stack>
    </ConvexProvider>
  )
}