import FuReadWriteSwitch from "./FuReadWriteSwitch"
import FuInputRwSwitch from "./FuInputRwSwitch"
import FuSelectRwSwitch from "./FuSelectRwSwitch"
import locale from "@/locale"

FuReadWriteSwitch.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuReadWriteSwitch.name, FuReadWriteSwitch)
  Vue.component(FuInputRwSwitch.name, FuInputRwSwitch)
  Vue.component(FuSelectRwSwitch.name, FuSelectRwSwitch)
}

export default FuReadWriteSwitch
