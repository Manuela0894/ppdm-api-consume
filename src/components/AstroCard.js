import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import colors from "../styles/colors";

export default function AstroCard({ data, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{ uri: data.url }}
          style={styles.image}
        />

        <Text style={styles.title}>{data.title}</Text>

        <Text style={styles.date}>{data.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 12,
  },

  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  date: {
    color: colors.secondaryText,
  },
});