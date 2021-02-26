import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../layout'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/:type/:comName",
      meta: { title: "首页" },
      component: Home,
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/components/table')
  }
  next()
})
export default router
