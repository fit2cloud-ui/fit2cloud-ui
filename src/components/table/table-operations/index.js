import FuTableOperations from "./FuTableOperations";
import FuTableButton from "./FuTableButton";
import FuTableMoreButton from "./FuTableMoreButton";

FuTableOperations.install = function (Vue) {
  Vue.component(FuTableOperations.name, FuTableOperations);
  Vue.component(FuTableButton.name, FuTableButton);
  Vue.component(FuTableMoreButton.name, FuTableMoreButton);
};

export default FuTableOperations;
