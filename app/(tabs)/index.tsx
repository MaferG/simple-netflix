import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
  };
  return (
    <View style={styles.container}>
      <ThemedText type="title">Sing in</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Contraseña"
        secureTextEntry
      />
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText>Sing in</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 16,
  },
  input: {
    width: "75%",
    height: 40,
    borderColor: "#E50914",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "grey",
    color: "#FFFFFF",
    margin: 20,
  },
  button: {
    backgroundColor: "#E50914",
    color: "#FFFFFF",
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
  },
});
