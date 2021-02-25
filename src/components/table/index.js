import FuTable from "./FuTable";
import FuTablePagination from "./FuTablePagination";
import FuColumnSelect from "./FuColumnSelect";

FuTable.install = function (Vue) {
  Vue.component(FuTable.name, FuTable);
  Vue.component(FuTablePagination.name, FuTablePagination);
  Vue.component(FuColumnSelect.name, FuColumnSelect);
};

export default FuTable;
