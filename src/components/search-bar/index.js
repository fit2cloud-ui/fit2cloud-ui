import FuSearchBar from "./FuSearchBar"
import FuQuickSearch from "./FuQuickSearch"
import FuSearchBarButton from "./FuSearchBarButton"
import FuComplexComponents from "./complex-components"
import locale from "@/locale"

FuSearchBar.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuSearchBar.name, FuSearchBar)
  Vue.component(FuSearchBarButton.name, FuSearchBarButton)
  Vue.component(FuQuickSearch.name, FuQuickSearch)
  Vue.use(FuComplexComponents)
}

export default FuSearchBar
