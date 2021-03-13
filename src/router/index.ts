import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeComponent from "../components/home/HomeComponent.vue";
import RandomizerComponent from "@/components/randomizer/RandomizerComponent.vue";
import ReportGeneratorComponent from "@/components/report-generator/ReportGenerator.vue";

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
  },
  {
    path: "/report",
    name: "Report",
    component: ReportGeneratorComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
