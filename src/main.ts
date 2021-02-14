import { createApp } from "vue";
import router from "./router";
import AppComponent from "@/AppComponent.vue";

createApp(AppComponent)
  .use(router)
  .mount("#app");
