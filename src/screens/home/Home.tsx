import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./Style";
import { Logo } from "../../components/logo/Logo";
import { Btn } from "../../components/button/Btn";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Logo />

        <View style={styles.inputContainer}>
          <Btn />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
