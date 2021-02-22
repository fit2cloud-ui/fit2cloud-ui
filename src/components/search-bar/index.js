import FuSearchBar from "./FuSearchBar";
import FuQuickSearch from "./FuQuickSearch";

FuSearchBar.install = function (Vue) {
  Vue.component(FuSearchBar.name, FuSearchBar);
  Vue.component(FuQuickSearch.name, FuQuickSearch);
};

export default FuSearchBar;
