import FuVirtualScroll from "./FuVirtualScroll";
import locale from "@/locale";

FuVirtualScroll.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuVirtualScroll.name, FuVirtualScroll)
}

export default FuVirtualScroll
