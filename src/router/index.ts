import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeComponent from "../components/home/HomeComponent.vue";
import RandomizerComponent from "@/components/randomizer/RandomizerComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent
  },
  {
    path: "/randomizer",
    name: "Randomizer",
    component: RandomizerComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
