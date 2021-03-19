import locale from "@/locale";

const components = require.context('./', true, /\.vue$/)

const FuComplexComponents = {
  install: function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
    components.keys().map(key => {
      const component = components(key).default
      Vue.component(component.name, component);
    })
  }
}

export default FuComplexComponents;
