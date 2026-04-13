import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const apiUrl = Constants.expoConfig?.extra?.apiUrl || "https://agendei-api-53h2.onrender.com";

console.log("API URL:", apiUrl);

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("sessionToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
