import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../layout'
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.replace
//修改原型对象中的push方法
VueRouter.prototype.replace = function replace(location) {
   return originalPush.call(this, location).catch(err => err)
}
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
    next('/guide/getting-started')
  }
  next()
})

export default router
