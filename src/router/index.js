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
    path: "/alternatives",
    name: "alternative",
    component: () => import("@/pages/Alternatives.vue"),
  },
  {
    path: "/alternatives/add",
    name: "addAlternative",
    component: () => import("@/pages/AddAlternative.vue"),
  },
  {
    path: "/alternatives/edit",
    name: "editAlternative",
    component: () => import("@/pages/EditAlternative.vue"),
  },
  {
    path: "/criteria",
    name: "criteria",
    component: () => import("@/pages/Criteria.vue"),
  },
  {
    path: "/sub-criteria",
    name: "subCriteria",
    component: () => import("@/pages/SubCriteria.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
