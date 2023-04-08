import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/collections",
    name: "collection",
    component: () => import("@/pages/Collection.vue"),
  },
  {
    path: "/collections/:id/alternatives",
    name: "alternatives",
    component: () => import("@/pages/Alternatives.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
