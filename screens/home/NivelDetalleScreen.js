import React from "react";
import { View, Text } from "react-native";

export default function NivelDetalleScreen({ route }) {
  const { nivel } = route.params;

  return (
    <View>
      <Text>{nivel.nombre}</Text>
    </View>
  );
}