import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  { path: "/", component: Home },
  { path: "/:path(.*)", component: NotFound, meta: { title: "404" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const defaultTitle = "Vue Template";
  document.title = to.meta.title
    ? `${to.meta.title} | ${defaultTitle}`
    : defaultTitle;
});

export default router;
