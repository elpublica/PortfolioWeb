import { createApp } from "vue";
//import "./style.css";
import App from "./App.vue";
import router from "./router";

//createApp(App).mount('#app')

// const app = createApp(App);

// app.use(router); // Dile a Vue que use el router
// app.mount("#app");

// --- CONFIGURACIÓN DE PRIMEVUE ---
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura"; // El tema moderno
import "primeicons/primeicons.css"; // Los iconos (pi-user, pi-home, etc.)

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark", // Usaremos esta clase para controlar el fondo
    },
  },
});

app.mount("#app");
