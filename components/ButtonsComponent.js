import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomNav({ active = "Inicio", onTabPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.item, active === "Inicio" && styles.activeItem]}
        onPress={() => onTabPress && onTabPress("Inicio")}
      >
        <Text style={active === "Inicio" ? styles.activeText : styles.text}>
          Inicio
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.item, active === "Agenda" && styles.activeItem]}
        onPress={() => onTabPress && onTabPress("Agenda")}
      >
        <Text style={active === "Agenda" ? styles.activeText : styles.text}>
          Agenda
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.item, active === "Calma" && styles.activeItem]}
        onPress={() => onTabPress && onTabPress("Calma")}
      >
        <Text style={active === "Calma" ? styles.activeText : styles.text}>
          Calma
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#f9faf6",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeItem: {
    backgroundColor: "#2a6486",
  },
  text: {
    color: "#2e3430",
    fontSize: 12,
  },
  activeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
