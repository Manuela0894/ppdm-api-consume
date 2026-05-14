import api from "./api";

const API_KEY = "DEMO_KEY";

export async function getRandomPhotos() {
  const response = await api.get(
    `/planetary/apod?api_key=${API_KEY}&count=10`
  );

  return response.data;
}

export async function getPhotoByDate(date) {
  const response = await api.get(
    `/planetary/apod?api_key=${API_KEY}&date=${date}`
  );

  return response.data;
}