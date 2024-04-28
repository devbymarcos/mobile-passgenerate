import React from "react";
import { View, Image } from "react-native";
import LogoImage from "../../../assets/devbymarcos-black.png";
import { styles } from "./LogoStyle";

export function Logo() {
  return (
    <View>
      <Image source={LogoImage} style={styles.logoImage} />
    </View>
  );
}
