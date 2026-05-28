import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// --- CONFIGURACIÓN DE PRIMEVUE ---
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice"; // 1. IMPORTA ESTO
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import Tooltip from "primevue/tooltip";

const app = createApp(App);

app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});

app.directive("tooltip", Tooltip);
app.mount("#app");
