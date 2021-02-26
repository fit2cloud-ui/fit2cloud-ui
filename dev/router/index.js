import Vue from "vue";
import VueRouter from 'vue-router'
import ComponentsRouter from "./components";

export const Modules = [ComponentsRouter]

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: "/", redirect: '/components'},
    ...Modules,
  ]
});

export default router
