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
    name: "collections",
    component: () => import("@/pages/Collection.vue"),
  },
  {
    path: "/alternatives",
    name: "alternatives",
    component: () => import("@/pages/Alternatives.vue"),
  },
  {
    path: "/calculates",
    name: "calculates",
    component: () => import("@/pages/Calculate.vue"),
  },
  {
    path: "/criteria",
    name: "criteria",
    component: () => import("@/pages/Criteria.vue"),
  },
  {
    path: "/sub-criteria",
    name: "sub-criteria",
    component: () => import("@/pages/SubCriteria.vue"),
  },
  {
    path: "/final-scores",
    name: "final-scores",
    component: () => import("@/pages/FinalScore.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
