import FuTable from "./FuTable";
import FuTablePagination from "./FuTablePagination";

FuTable.install = function (Vue) {
  Vue.component(FuTable.name, FuTable);
  Vue.component(FuTablePagination.name, FuTablePagination);
};

export default FuTable;
