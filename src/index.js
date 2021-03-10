import Vue from 'vue'
import locale from "@/locale"
import "@/styles/index.scss"
import PackageJSON from "../package.json"
import FuSearchBar from '@/components/search-bar/index.js';
import FuSpeedDial from '@/components/speed-dial/index.js';
import FuTable from '@/components/table/index.js';
const components = require.context('@/components/', true, /index\.js$/);

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  components.keys().forEach(key => {
    let component = components(key).default;
    Vue.use(component);
  })
}

const plugin = {
  name: "Fit2CloudUI",
  version: PackageJSON.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
  FuSearchBar,
  FuSpeedDial,
  FuTable
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
export {
  install,
  FuSearchBar,
  FuSpeedDial,
  FuTable
}

export default plugin
