import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "primeicons/primeicons.css";
import "../src/assets/index.css";

createApp(App).use(router).mount("#app");
