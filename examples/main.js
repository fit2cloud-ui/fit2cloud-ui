import Vue from 'vue'
import App from './App.vue'
import Fit2CloudUI from "@/index"
// import '@/styles/all.scss';
import './index.scss';
import ElementUI from 'element-ui';
import router from "./router";
import filters from "@/filters"
import './pages'
import './components'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Fit2CloudUI)
Vue.use(filters)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
