import locale from "@/locale"
import "@/styles/index.scss"

const components = require.context('@/components/', true, /index\.js$/);

const plugin = {
  name: "Fit2CloudUI",
  version: '0.1.0',
  locale: locale.use,
  i18n: locale.i18n,
  install: function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    components.keys().forEach(key => {
      let component = components(key).default;
      Vue.use(component);
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
