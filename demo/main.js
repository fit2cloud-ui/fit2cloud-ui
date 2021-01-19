import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import '@/scss/index.scss';
import router from "./router";

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
