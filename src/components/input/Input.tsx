import React from "react";
import { TextInput } from "react-native";

import { styles } from "./InputStyle";

interface InputProps {
  pass: string;
}

export function Input(props: InputProps) {
  return (
    <TextInput placeholder="Pass" style={styles.input} value={props.pass} />
  );
}
