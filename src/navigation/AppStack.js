import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import AgendaScreen from "../../screens/Agenda/AgendaScreen";
import CalmaScreen from "../../screens/calma/CalmaScreen";
import WelcomeScreen from "../../screens/auth/WelcomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import NivelDetalle from "../../screens/home/NivelDetalleScreen"; 

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={WelcomeScreen} />
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Calma" component={CalmaScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="NivelDetalle" component={NivelDetalle} />
    </Stack.Navigator>
  );
}