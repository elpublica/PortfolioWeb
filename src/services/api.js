import axios from "axios";

const API_URL = "https://localhost:7007/api"; // <--- Pon aquí el puerto de tu API de .NET

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  // Obtener la info del perfil (Sección roja/amarilla de tu plan)
  getPerfil() {
    return apiClient.get("/Perfil");
  },
  // Obtener los proyectos (Cards)
  getProyectos() {
    return apiClient.get("/Proyectos");
  },
  // Obtener experiencia (Sección azul)
  getExperiencias() {
    return apiClient.get("/Experiencia");
  },
  getConocimientos() {
    return apiClient.get("/Conocimientos");
  },
  getHabilidades() {
    return apiClient.get("/Habilidades"); // O como se llame tu controlador
  },
  getEstudios() {
    return apiClient.get("/Estudios");
  },
  getRedesSociales() {
    return apiClient.get("/RedesSociales");
  },
};
