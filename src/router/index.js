import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "News",
      component: NewsView,
    },
    {
      path: "/teams",
      name: "Teams",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TeamsView.vue"),
    },
    {
      path: "/table",
      name: "Table",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/competitions",
      name: "Competitions",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompetitionsView.vue"),
    },
    {
      path: "/fixtures",
      name: "Fixtures",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FixturesView.vue"),
    },
    {
      path: "/results",
      name: "Results",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ResultsView.vue"),
    },
    {
      path: "/transfers",
      name: "Transfers",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TransfersView.vue"),
    },
  ],
  linkActiveClass: "d-none",
  linkExactActiveClass: ""
});

export default router;
