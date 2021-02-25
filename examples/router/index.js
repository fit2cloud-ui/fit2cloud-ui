import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../layout'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/:comName",
      meta: { title: "首页" },
      component: Home,
    }
  ]
});

export default router
