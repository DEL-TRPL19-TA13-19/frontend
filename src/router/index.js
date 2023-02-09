import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
