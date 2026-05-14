import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function ErrorMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Error while loading API data.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  text: {
    color: colors.danger,
    fontSize: 16,
  },
});