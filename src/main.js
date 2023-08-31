import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// main css
import "../src/assets/css/main.css";

createApp(App).use(router).mount("#app");
