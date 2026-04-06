import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}