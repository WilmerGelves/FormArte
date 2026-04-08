import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <>
      <StatusBar hidden />
      <AppNavigator />
    </>
  );
}
