import FuTable from "./FuTable";
import FuTablePagination from "./FuTablePagination";
import FuTableOperations from "./table-operations";
import FuTableColumnSelect from "./table-column-select";
import '@/styles/components/table.scss';
FuTable.install = function (Vue) {
  Vue.component(FuTable.name, FuTable);
  Vue.component(FuTablePagination.name, FuTablePagination);
  Vue.use(FuTableOperations)
  Vue.use(FuTableColumnSelect)
};

export default FuTable;
