import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

//mobile css
import "../src/assets/css/mobile.css";
// main css
import "../src/assets/css/main.css";

import { setupCalendar } from "v-calendar";

createApp(App).use(router).use(setupCalendar, {}).mount("#app");
