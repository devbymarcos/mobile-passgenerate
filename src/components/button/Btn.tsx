import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Input } from "../input/Input";
import generatePass from "../../services/password";
import * as Clipboard from "expo-clipboard";

export function Btn() {
  const [pass, setPass] = useState("");

  function handleGenarateButton() {
    let generateToke = generatePass();
    setPass(generateToke);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <Input pass={pass} />
      <Pressable style={styles.btn} onPress={handleGenarateButton}>
        <Text style={styles.text}>GERAR</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={handleCopyButton}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
