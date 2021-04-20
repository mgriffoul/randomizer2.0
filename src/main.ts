import { createApp } from "vue";
import router from "./router";
import AppComponent from "@/AppComponent.vue";
import store from "./store";

createApp(AppComponent)
  .use(router)
  .use(store)
  .mount("#app");
