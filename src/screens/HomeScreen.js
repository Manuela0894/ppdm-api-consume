import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import AstroCard from "../components/AstroCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import colors from "../styles/colors";

import { getRandomPhotos } from "../services/nasaService";

export default function HomeScreen({ navigation }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {
    try {
      const response = await getRandomPhotos();

      const imageOnly = response.filter(
        item => item.media_type === "image"
      );

      setPhotos(imageOnly);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <TouchableOpacity
 style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>

      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AstroCard
            data={item}
            onPress={() =>
              navigation.navigate("Details", {
                photo: item,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },

  buttonText: {
    color: colors.text,
    fontWeight: "bold",
  },
});