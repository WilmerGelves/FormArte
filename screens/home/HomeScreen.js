import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ButtomComponent from "../../components/ButtonsComponent";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation();
  const handleTabPress = (tab) => {
    navigation.navigate(tab);
  };

  return (
    <View style={styles.container}>

      {/* HEADER
      <View style={styles.header}>
        <Text style={styles.title}>FormArte</Text>
      </View> */}

      {/* CONTENIDO */}
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.node}>
          <View style={[styles.circle, { backgroundColor: "#366a40" }]} />
          <Text style={styles.level}>Nivel 1</Text>
          <Text style={styles.label}>Respeto</Text>
        </View>

        <View style={styles.node}>
          <View style={[styles.circleLarge, { backgroundColor: "#2a6486" }]} />
          <Text style={[styles.level, { color: "#2a6486" }]}>En progreso</Text>
          <Text style={styles.label}>Empatía</Text>
        </View>

        <View style={styles.node}>
          <View style={[styles.circle, styles.locked]} />
          <Text style={styles.level}>Nivel 3</Text>
          <Text style={styles.label}>Tolerancia</Text>
        </View>

        <View style={styles.node}>
          <View style={[styles.circle, styles.locked]} />
          <Text style={styles.level}>Nivel 4</Text>
          <Text style={styles.label}>Comunicación</Text>
        </View>

      </ScrollView>

      {/* BOTÓN FLOTANTE */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>Continuar</Text>
      </TouchableOpacity>

      {/* MENÚ REUTILIZABLE */}
      <ButtomComponent active="Inicio" onTabPress={handleTabPress} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9faf6",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a6486",
  },
  content: {
    alignItems: "center",
    paddingBottom: 120,
  },
  node: {
    alignItems: "center",
    marginVertical: 30,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  circleLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  locked: {
    backgroundColor: "#dfe4de",
  },
  level: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#5b605c",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2e3430",
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#2a6486",
    padding: 15,
    borderRadius: 20,
  },
  fabText: {
    color: "white",
    fontWeight: "bold",
  },
});
