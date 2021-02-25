import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "../Home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: "/", redirect: '/home'},
    {
      path: "/home",
      meta: {title: "首页"},
      component: Home,
    }
  ]
});

export default router
