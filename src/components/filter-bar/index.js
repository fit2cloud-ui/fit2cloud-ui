import FuSearchInput from "./FuSearchInput"
import FuFilterBar from "./FuFilterBar";
import FuFilter from "./FuFilter";
import FuFilterSelect from "./filter-components/FuFilterSelect";
import FuFilterDate from "./filter-components/FuFilterDate";
import FuFilterDateTime from "./filter-components/FuFilterDateTime";
import locale from "@/locale"

FuSearchInput.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuFilterBar.name, FuFilterBar)
  Vue.component(FuFilter.name, FuFilter)
  Vue.component(FuSearchInput.name, FuSearchInput)
  Vue.component(FuFilterSelect.name, FuFilterSelect)
  Vue.component(FuFilterDate.name, FuFilterDate)
  Vue.component(FuFilterDateTime.name, FuFilterDateTime)
}

export default FuSearchInput
