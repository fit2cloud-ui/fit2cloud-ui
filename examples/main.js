import Vue from 'vue'
import App from './App.vue'
// 整体引入
import Fit2CloudUI from "@/index"
import '@/styles/index.scss';
import ElementUI from 'element-ui';
import router from "./router";
import filters from "@/filters"
import './pages'
import './components'
/* ions */
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI, {size: "default"})
Vue.use(Fit2CloudUI)
Vue.use(filters)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
