import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cosmos Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
  },
});