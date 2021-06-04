import FuTabs from "./FuTabs"
import locale from "@/locale"

FuTabs.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuTabs.name, FuTabs)
}

export default FuTabs
