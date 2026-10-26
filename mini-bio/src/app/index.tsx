import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <View style={styles.content}>
        <Image
          source={require("../../assets/images/Mateus.jpg")}npx expo start
          style={styles.photo}
        />

        <Text style={styles.label}>SOBRE MIM</Text>

        <Text style={styles.name}>
          Mateus José{"\n"}Bispo Oliveira
        </Text>

        <View style={styles.line} />

        <Text style={styles.role}>
          Estudante de Ciência da Computação
        </Text>

        <Text style={styles.bio}>
          Sou estudante de Ciência da Computação e técnico em
          Desenvolvimento de Sistemas. Tenho interesse em tecnologia,
          programação e desenvolvimento de soluções inovadoras.
          Busco constantemente aprimorar meus conhecimentos,
          explorar novas tecnologias e transformar ideias em
          projetos que gerem impacto positivo.
        </Text>
      </View>

      <Text style={styles.footer}>DESENVOLVIDO COM REACT NATIVE + EXPO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1120",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  photo: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 4,
    borderColor: "#3b82f6",
    marginBottom: 30,
  },
  label: {
    color: "#60a5fa",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 12,
  },
  name: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 38,
  },
  line: {
    width: 55,
    height: 3,
    backgroundColor: "#3b82f6",
    borderRadius: 2,
    marginVertical: 22,
  },
  role: {
    color: "#93c5fd",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 22,
  },
  bio: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    maxWidth: 350,
  },
  footer: {
    color: "#64748b",
    fontSize: 10,
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 12,
  },
});
