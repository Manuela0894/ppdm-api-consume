import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});