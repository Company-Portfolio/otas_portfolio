import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FreeConsulting from "../views/FreeConsultingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/feeconsulting",
    name: "freeConsulting",
    component: FreeConsulting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
