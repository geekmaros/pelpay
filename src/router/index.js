import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Developers from "../views/Developers.vue";
import Features from "../views/Features.vue";
import Compliance from "../views/Compliance.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/developers",
    name: "Developers",
    component: Developers,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/compliance",
    name: "Compliance",
    component: Compliance,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
