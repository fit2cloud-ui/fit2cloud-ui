/* Components */
import Vue from 'vue'
// import SearchDemo from './search/SearchDemo'
// import SpeedDialDemo from './speed-dial/SpeedDialDemo'
// import TableDoc from './Table'
// import ExampleLoader from './example-loader'
const components = require.context('./', true, /index\.vue$/);
components.keys().forEach(key => {
  let component = components(key).default;
  Vue.component(component.name, component)
})
// Vue.component(SearchDemo.name, SearchDemo)
// Vue.component(SpeedDialDemo.name, SpeedDialDemo)
// Vue.component(TableDoc.name, TableDoc)
// Vue.component(ExampleLoader.name, ExampleLoader)
