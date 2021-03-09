import FuSearchBar from "./FuSearchBar";
import FuQuickSearch from "./FuQuickSearch";
import FuComplexComponents from "./complex-components";

FuSearchBar.install = function (Vue) {
  Vue.component(FuSearchBar.name, FuSearchBar);
  Vue.component(FuQuickSearch.name, FuQuickSearch);
  Vue.use(FuComplexComponents);
};

export default FuSearchBar;
