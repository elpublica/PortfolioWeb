import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/proyecto/:id",
    name: "ProyectoDetalle",
    component: () => import("../views/ProyectoDetalle.vue"),
    props: true, // Esto permite recibir el ID de la base de datos como una prop
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminDashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
