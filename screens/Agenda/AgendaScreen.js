import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomNav from "../../components/ButtonsComponent";
import { useNavigation } from "@react-navigation/native";

export default function AgendaScreen({ navigation }) {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Saludar", desc: "Decir hola con respeto", done: false },
    { id: 2, title: "Dar las gracias", desc: "Mostrar gratitud", done: false },
    { id: 3, title: "Esperar turno", desc: "Practicar la paciencia", done: false },
    { id: 4, title: "Escuchar", desc: "Prestar atención a otros", done: false },
  ]);

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  const progress =
    tasks.filter((t) => t.done).length / tasks.length;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.subtitle}>AGENDA DE HOY</Text>
        <Text style={styles.link}>Actividades</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Progreso del día
        </Text>

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress * 100}%` },
            ]}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {tasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              styles.card,
              task.done && styles.cardActive,
            ]}
            onPress={() => toggleTask(task.id)}
            activeOpacity={0.8}
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>
                {task.title}
              </Text>
              <Text style={styles.cardDesc}>
                {task.desc}
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.circle,
                task.done && styles.circleActive,
              ]}
              onPress={() => toggleTask(task.id)}
            >
              {task.done && (
                <Text style={styles.check}>✓</Text>
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNav
        active="Agenda"
        onTabPress={(tab) => {
          if (tab === "Inicio") navigation.navigate("Inicio");
          if (tab === "Agenda") navigation.navigate("Agenda");
          if (tab === "Calma") navigation.navigate("Calma");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ef",
    paddingTop: 50,
  },

  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    color: "#2e3430",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 12,
    color: "#7a807c",
    letterSpacing: 2,
  },

  link: {
    color: "#2a6486",
    marginTop: 5,
    fontWeight: "bold",
  },

  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  progressText: {
    fontSize: 12,
    color: "#7a807c",
    marginBottom: 5,
  },

  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#dfe6e3",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#7fb3d5",
  },

  list: {
    padding: 15,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  cardActive: {
    borderWidth: 2,
    borderColor: "#2a6486",
  },

  textContainer: {
    width: "75%",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e3430",
  },

  cardDesc: {
    fontSize: 12,
    color: "#7a807c",
    marginTop: 3,
  },

  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#c7ccc9",
    justifyContent: "center",
    alignItems: "center",
  },

  circleActive: {
    backgroundColor: "#2a6486",
    borderColor: "#2a6486",
  },

  check: {
    color: "white",
    fontSize: 14,
  },
});
