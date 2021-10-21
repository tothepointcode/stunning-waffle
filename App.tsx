import { StatusBar } from "expo-status-bar";
import React from "react";

// screens
import GetStarted from "./screens/GetStarted";
import Welcome from "./screens/Welcome";
import Balance from "./screens/Balance";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Balance />
    </>
  );
}
