<template>
  <div class="fu-complex-table">
    <div class="fu-complex-table__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="fu-complex-table__toolbar" v-if="$slots.toolbar || searchConfig">
      <slot name="toolbar"></slot>
    </div>

    <div class="fu-complex-table__body">
      <fu-table v-on="$listeners" v-bind="$attrs" :columns="columns" :local-key="localKey">
        <slot></slot>
      </fu-table>
    </div>

    <div class="fu-complex-table__pagination" v-if="$slots.pagination || paginationConfig">
      <slot name="pagination">
        <fu-table-pagination :current-page.sync="paginationConfig.currentPage"
                             :page-size.sync="paginationConfig.pageSize"
                             v-bind="paginationConfig"
                             @change="search"/>
      </slot>
    </div>
  </div>
</template>

<script>
import FuSearchBar from "../search-bar"
import FuQuickSearch from "../search-bar/FuQuickSearch";
import FuColumnSelect from "../table/FuColumnSelect";
import FuTablePagination from "../table/FuTablePagination";

export default {
  name: "FuComplexTable",
  components: {FuTablePagination, FuQuickSearch, FuColumnSelect, FuSearchBar},
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key
    header: String,
    searchConfig: Object,
    paginationConfig: Object,
  },
  data() {
    return {
      condition: {}
    }
  },
  methods: {
    search(condition, e) {
      if (condition) {
        this.condition = condition
      }
      this.$emit("search", this.condition, e)
    }
  },
}
</script>
