import FuDynamicTable from "./FuComplexTable";
import FuColumnSelect from "./FuColumnSelect";

FuDynamicTable.install = function (Vue) {
  Vue.component(FuDynamicTable.name, FuDynamicTable);
  Vue.component(FuColumnSelect.name, FuColumnSelect);
};

export default FuDynamicTable;
