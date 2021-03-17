function camelCaseToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// 变量及element的scss
import "../src/styles/require.scss";

const Fit2CloudUI = {
  install: function (Vue, ...names) {
    names.forEach(name => {
      // 按需加载组件的scss
      require("../src/styles/components/" + camelCaseToDash(name) + ".scss")
      // 按需加载组件的入口js
      const component = require("../lib/" + camelCaseToDash(name) + ".js")
      Vue.use(component.default)
    })
  }
}

export default Fit2CloudUI
