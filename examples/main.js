import Vue from 'vue'
import App from './App.vue'
// 整体引入
// import Fit2CloudUI from "@/index"
// import '@/styles/all.scss';

// 按需引入
import Fit2CLoudUI from "../require"
import ElementUI from 'element-ui';
import router from "./router";
import filters from "@/filters"
import './pages'
import './components'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Fit2CLoudUI, "search-bar", "SpeedDial", "Table")
Vue.use(filters)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
