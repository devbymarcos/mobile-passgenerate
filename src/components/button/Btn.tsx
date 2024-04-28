import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";

import { styles } from "./styles";
import { Input } from "../input/Input";

export function Btn() {
  const [pass, setPass] = useState("");

  function handleGenarateButton() {
    setPass("Ola");
  }

  return (
    <>
      <Input pass={pass} />
      <Pressable style={styles.btn} onPress={handleGenarateButton}>
        <Text style={styles.text}>GERAR</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => {
          console.log("fui pressioando");
        }}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
