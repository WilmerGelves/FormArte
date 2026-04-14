import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ButtomComponent from "../../components/ButtonsComponent";
import { useNavigation } from "@react-navigation/native";
import { levels } from "../../src/data/levels";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    navigation.navigate(tab);
  };

  //ENCUENTRA EL PRÓXIMO NIVEL DESBLOQUEADO O EL PRIMERO SI TODOS ESTÁN BLOQUEADOS
  const getCurrentLevel = () => {
    const current = levels.find(l => l.estado === "unlocked");
    return current || levels[0];
  }; 

  const getIcon = (item) => {
    if (item.estado === "locked") return "lock";
    if (item.estado === "completed") return "check-circle";

    // unlocked → icono real
    switch (item.icon) {
      case "heart":
        return "favorite";
      case "chat":
        return "chat";
      default:
        return "circle";
    }
  };

  const handlePress = (item) => {
    if (item.estado !== "locked") {
      navigation.navigate("NivelDetalle", { nivel: item });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Camino punteado estilo DUO */}
        <View style={styles.pathContainer}>
          <Svg height="1000" width="100%" style={styles.svg}>
            <Path
              d="M200 0 
                C200 100 320 150 320 300 
                C320 450 80 500 80 650 
                C80 800 200 850 200 1000"
              stroke="#cfcccc"
              strokeWidth="3"
              strokeDasharray="10,10"
              fill="none"
            />
          </Svg>
        </View>       
        {levels.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.node,
                isLeft ? styles.left : styles.right
              ]}
              onPress={() => handlePress(item)}
              disabled={item.estado === "locked"}
            >
              <View
                style={[
                  styles.circle,
                  item.estado === "completed" && styles.completed,
                  item.estado === "unlocked" && styles.unlocked,
                  item.estado === "locked" && styles.locked,
                ]}
              > 
                <MaterialIcons
                  name={getIcon(item)}
                  size={30}
                  color={item.estado === "locked" ? "#999" : "white"}
                />
              </View>

              <Text style={styles.level}>
                {item.estado === "unlocked" ? "En progreso" : `Nivel ${item.id}`}
              </Text>

              <Text style={styles.label}>{item.nombre}</Text>
            </TouchableOpacity>
          );
        })}

      </ScrollView>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("NivelDetalle", { nivel: getCurrentLevel() })}
      >
        <Text style={styles.fabText}>Continuar</Text>
      </TouchableOpacity>

      {/* MENÚ */}
      <ButtomComponent active="Inicio" onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9faf6",
  },

  content: {
    paddingVertical: 50,
    paddingBottom: 120,
  },

  node: {
    alignItems: "center",
    marginVertical: 40,
  },

  left: {
    alignSelf: "flex-start",
    marginLeft: 50,
    marginRight: 50,
  },

  right: {
    alignSelf: "flex-end",
    marginLeft: 50,
    marginRight: 50,
  },

  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  unlocked: {
    backgroundColor: "#2a6486",
  },

  completed: {
    backgroundColor: "#366a40",
  },

  locked: {
  backgroundColor: "#dfe4de",
  opacity: 0.5,
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
  pathContainer: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  alignItems: "center",
  },

  svg: {
    position: "absolute",
  },
});