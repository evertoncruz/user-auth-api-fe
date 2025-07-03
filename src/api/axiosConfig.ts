import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // ou URL da sua API em produção
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptador para adicionar o token a cada request
api.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("token"); // ou use sessionStorage

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
