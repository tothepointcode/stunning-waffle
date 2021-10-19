import { StatusBar } from "expo-status-bar";
import React from "react";

// screens
import GetStarted from "./screens/GetStarted";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <GetStarted />
    </>
  );
}
