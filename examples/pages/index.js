/* Components */
import Vue from 'vue'
const components = require.context('./', true, /index\.vue$/);
components.keys().forEach(key => {
  let component = components(key).default;
  Vue.component(component.name, component)
})
