import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import colors from "../styles/colors";

import { saveFavorite } from "../storage/favoritesStorage";

export default function DetailsScreen({ route }) {
  const { photo } = route.params;

  async function handleFavorite() {
    await saveFavorite(photo);

    Alert.alert("Success", "Photo saved to favorites.");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: photo.url }}
          style={styles.image}
        />

        <Text style={styles.title}>{photo.title}</Text>

        <Text style={styles.date}>{photo.date}</Text>

        <Text style={styles.description}>
          {photo.explanation}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleFavorite}
        >
          <Text style={styles.buttonText}>
            Save Favorite
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },

  title: {
     color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  date: {
    color: colors.secondaryText,
    marginBottom: 20,
  },

  description: {
    color: colors.text,
    lineHeight: 24,
    marginBottom: 30,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: colors.text,
    fontWeight: "bold",
  },
});