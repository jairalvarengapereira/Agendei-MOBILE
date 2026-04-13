import axios from "axios";

const api = axios.create({
  baseURL: "https://agendei-api-53h2.onrender.com",
  // baseURL: "http://localhost:3001",
});

// Interceptador para adicionar o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sessionToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
