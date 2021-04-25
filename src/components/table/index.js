import FuTable from "./FuTable"
import FuTablePagination from "./FuTablePagination"
import FuTableOperations from "./table-operations"
import FuTableColumnSelect from "./table-column-select"
import FuTableColumnDropdown from "./table-column-dropdown"
import locale from "@/locale"

FuTable.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuTable.name, FuTable)
  Vue.component(FuTablePagination.name, FuTablePagination)
  Vue.use(FuTableOperations)
  Vue.use(FuTableColumnSelect)
  Vue.use(FuTableColumnDropdown)
}

export default FuTable
