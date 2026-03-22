import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

console.log("CONFIG:", Constants.expoConfig?.extra);

const api = axios.create({
  baseURL: Constants.expoConfig.extra.apiUrl,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("sessionToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
