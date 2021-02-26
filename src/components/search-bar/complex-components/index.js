const components = require.context('./', true, /\.vue$/)

const FuComplexComponents = {
  install: function (Vue) {
    components.keys().map(key => {
      const component = components(key).default
      Vue.component(component.name, component);
    })
  }
}

export default FuComplexComponents;
