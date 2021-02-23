import FuTable from "./FuTable";
import FuTableColumn from "./FuTableColumn";

FuTable.install = function (Vue) {
  Vue.component(FuTable.name, FuTable);
  Vue.component(FuTableColumn.name, FuTableColumn);
};

export default FuTable;
