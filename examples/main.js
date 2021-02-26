import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import '@/styles/index.scss';
import router from "./router";
import filters from "@/filters"
import Fit2CloudUI from "@/index"
import './pages'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Fit2CloudUI)
Vue.use(filters)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
