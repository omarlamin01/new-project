import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import HelpView from "../views/help.vue";
import ProjectDetails from "../views/ProjectDetails";
import "normalize.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/projects/:id",
        name: "project details",
        component: ProjectDetails,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/help",
    name: "HelpView",
    component: HelpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
