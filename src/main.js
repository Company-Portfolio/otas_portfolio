import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// vue form 
// import Vueform from '@vueform/vueform/plugin'
// import vueformConfig from '../vueform.config'
// import Builder from '../vueform.config'
// import builderConfig from '../vueform.config'

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

//mobile css
import "../src/assets/css/mobile.css";
// main css
import "../src/assets/css/main.css";

import { setupCalendar } from "v-calendar";

// createApp(App).use(router).use(Vueform, vueformConfig).use(Builder,builderConfig).use(setupCalendar, {}).mount("#app");
createApp(App).use(router).use(setupCalendar, {}).mount("#app");
