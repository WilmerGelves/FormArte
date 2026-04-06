import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import AgendaScreen from "../../screens/Agenda/AgendaScreen";
import CalmaScreen from "../../screens/calma/CalmaScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Calma" component={CalmaScreen} />
    </Stack.Navigator>
  );
}