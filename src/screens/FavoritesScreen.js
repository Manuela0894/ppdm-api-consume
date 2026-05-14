import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

import { useEffect, useState } from "react";

import AstroCard from "../components/AstroCard";

import colors from "../styles/colors";

import { getFavorites } from "../storage/favoritesStorage";

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const data = await getFavorites();

    setFavorites(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
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

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});