import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FreeConsulting from "../views/FreeConsultingView.vue";
import Aboutus from "../views/AboutView.vue";
import ServicesOffer from "../views/ServicesOffer.vue";
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
  {
    path: "/services",
    name: "services",
    component: ServicesOffer
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
