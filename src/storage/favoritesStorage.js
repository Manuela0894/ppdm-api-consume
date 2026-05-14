import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@cosmosExplorer:favorites";

export async function saveFavorite(photo) {
  try {
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);

    const favorites = stored ? JSON.parse(stored) : [];

    const alreadyExists = favorites.find(
      item => item.url === photo.url
    );

    if (alreadyExists) {
      return;
    }

    favorites.push(photo);

    await AsyncStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(favorites)
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getFavorites() {
  try {
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}