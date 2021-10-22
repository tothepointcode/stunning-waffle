import { StatusBar } from "expo-status-bar";
import React from "react";

// React Navigation
import RootStack from "./navigators/RootStack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootStack />
    </>
  );
}
