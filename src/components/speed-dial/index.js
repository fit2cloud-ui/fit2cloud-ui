import FuSpeedDial from "./FuSpeedDial"
import FuSpeedDialItem from "./FuSpeedDialItem"
import locale from "@/locale"

FuSpeedDial.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuSpeedDial.name, FuSpeedDial)
  Vue.component(FuSpeedDialItem.name, FuSpeedDialItem)
}

export default FuSpeedDial
