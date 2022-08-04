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
      path: "/table",
      name: "Table",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/fixtures",
      name: "Fixtures",
      component: () => import("../views/FixturesView.vue"),
    },
    {
      path: "/results",
      name: "Results",
      component: () => import("../views/ResultsView.vue"),
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically returns home/news page.
      component: NewsView
    }
  ],
  linkActiveClass: "nav-active",
  linkExactActiveClass: ""
});

export default router;
