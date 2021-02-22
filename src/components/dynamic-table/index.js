import FuDynamicTable from "./FuDynamicTable";
import FuColumnSelect from "./FuColumnSelect";
import FuTablePagination from "./FuTablePagination";

FuDynamicTable.install = function (Vue) {
  Vue.component(FuDynamicTable.name, FuDynamicTable);
  Vue.component(FuColumnSelect.name, FuColumnSelect);
  Vue.component(FuTablePagination.name, FuTablePagination);
};

export default FuDynamicTable;
