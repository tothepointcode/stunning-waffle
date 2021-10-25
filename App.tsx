import { StatusBar } from "expo-status-bar";
import React from "react";

// custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import RootStack from "./navigators/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <RootStack />
    </>
  );
}
