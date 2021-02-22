import FuTableOperations from "./FuTableOperations";
import FuTableButton from "./FuTableButton";
import FuTableEllipsisButton from "./FuTableEllipsisButton";

FuTableOperations.install = function (Vue) {
  Vue.component(FuTableOperations.name, FuTableOperations);
  Vue.component(FuTableButton.name, FuTableButton);
  Vue.component(FuTableEllipsisButton.name, FuTableEllipsisButton);
};

export default FuTableOperations;
