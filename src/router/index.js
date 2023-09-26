import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FreeConsulting from "../views/FreeConsultingView.vue";
import Aboutus from "../views/AboutView.vue";

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
  {
    path: "/aboutus",
    name: "aboutus",
    component: Aboutus,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
