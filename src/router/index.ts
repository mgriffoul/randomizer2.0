import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeComponent from "../components/home/HomeComponent.vue";
import ReportGeneratorComponent from "@/components/report-generator/ReportGenerator.vue";
import Dsm from "@/components/dsm/Dsm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent
  },
  {
    path: "/dsm",
    name: "Dsm",
    component: Dsm
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
