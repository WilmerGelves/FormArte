import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>FormArte</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Main */}
      <View style={styles.main}>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJAi3114nuuFBnTBnUydFQyX9-2cdXYyY9UgoGMh6Aezs9VA9_7YhduxatzZfr5pOm343D75luaWddOXMpJuid8Tzx3pUTAChsHAM2gEg-WI9TdOmHv5K-nrbRuGtw5akVPTR3ScHQPGyyCxlzHjaqornszuWfKwWsnq2o6N0BQJ0LlLbyAimi2flQJ42KTlrgHrv2yjKDAwAET6l_FN5eCGl7IUTSqmCoIEFMcmbjwR3R5VAR0XzfVJMax0PVo5MvtSCLkDXle3g" }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.appName}>FormArte</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleText}>Continuar con Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>Continuar sin registro</Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.slogan}>EL ARTE DE SER UNA BUENA PERSONA</Text>

          <View style={styles.links}>
            <Text style={styles.link}>Políticas de privacidad</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.link}>Términos de uso</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9faf6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 18,
    color: "#6096BA",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6096BA",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  logoSection: {
    alignItems: "center",
    marginTop: 40,
  },
  logoContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebefe9",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    opacity: 0.8,
  },
  appName: {
    fontSize: 28,
    fontWeight: "600",
    color: "#2e3430",
  },
  buttonSection: {
    gap: 15,
  },
  googleButton: {
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a6486",
  },
  googleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  secondaryButton: {
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebefe9",
  },
  secondaryText: {
    color: "#5b605c",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    gap: 10,
  },
  slogan: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#5b605c",
    textAlign: "center",
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  link: {
    fontSize: 12,
    color: "#2a6486",
  },
  dot: {
    fontSize: 12,
    color: "#aaa",
  },
});
