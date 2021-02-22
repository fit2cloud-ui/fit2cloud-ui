<template>
  <div class="fu-dynamic-table">
    <div class="fu-dynamic-table__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="fu-dynamic-table__toolbar" v-if="$slots.toolbar || searchConfig">
      <slot name="toolbar">
        <fu-search-bar v-bind="searchConfig" @exec="search">
          <slot name="search-bar"></slot>
          <fu-column-select :columns="columns" v-if="searchConfig.useColSelect !== false"/>
        </fu-search-bar>
      </slot>
    </div>

    <div class="fu-dynamic-table__body">
      <el-table v-on="$listeners" v-bind="$attrs" :data="data" :key="key">
        <fu-dynamic-table-body :columns="columns" :refresh-key="key">
          <slot></slot>
        </fu-dynamic-table-body>
      </el-table>
    </div>

    <div class="fu-dynamic-table__pagination" v-if="$slots.pagination || paginationConfig">
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
import FuColumnSelect from "../dynamic-table/FuColumnSelect";
import FuDynamicTableBody from "@/components/dynamic-table/FuDynamicTableBody";
import FuTablePagination from "@/components/dynamic-table/FuTablePagination";

export default {
  name: "FuDynamicTable",
  components: {FuTablePagination, FuDynamicTableBody, FuQuickSearch, FuColumnSelect, FuSearchBar},
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key
    header: String,
    searchConfig: Object,
    paginationConfig: Object,
    data: Array,
  },
  watch: {
    columns: {
      handler: function () {
        this.key++ // 解决el-table tbody不能正确渲染的问题
        if (this.localKey) {
          localStorage.setItem(this.columnsKey, JSON.stringify(this.columns))
        }
      },
      deep: true
    }
  },
  data() {
    return {
      key: 0,
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
  computed: {
    columnsKey() {
      return "FU-DT-" + this.localKey
    }
  },
  created() {
    if (this.localKey) {
      let columnsKey = localStorage.getItem(this.columnsKey)
      if (columnsKey) {
        try {
          if (this.columns.length > 0) {
            this.columns.splice(0, this.columns.length)
          }
          this.columns.concat(JSON.parse(localStorage.getItem(this.columnsKey)))
        } catch (e) {
          console.warn("get columns error", e)
        }
      }
    }
  }
}
</script>
