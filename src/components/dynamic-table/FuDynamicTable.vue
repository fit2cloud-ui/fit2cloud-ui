<template>
  <div class="fu-dynamic-table">

    <div class="fu-dynamic-table__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="fu-dynamic-table__tools">
      <slot name="search-bar">
        <fu-search-bar v-bind="searchConfig" @exec="search" v-if="searchConfig">
          <fu-column-select :columns="columns"/>
        </fu-search-bar>
      </slot>
    </div>

    <div class="fu-dynamic-table__body">
      <el-table v-on="$listeners" v-bind="$attrs" :data="data" :key="key">
        <fu-dynamic-table-body :columns="columns">
          <slot></slot>
          <slot name="buttons">
            <fu-table-button-column :buttons="buttons" :label="t('fu.dynamic_table.operations')" fix v-if="buttons"/>
          </slot>
        </fu-dynamic-table-body>
      </el-table>
    </div>
  </div>
</template>

<script>
import FuSearchBar from "../search-bar"
import FuQuickSearch from "../search-bar/FuQuickSearch";
import FuColumnSelect from "../dynamic-table/FuColumnSelect";
import FuTableButtonColumn from "./table-button-column/FuTableButtonColumn";
import FuDynamicTableBody from "@/components/dynamic-table/FuDynamicTableBody";
import Locale from "@/mixins/locale";

export default {
  name: "FuDynamicTable",
  components: {FuDynamicTableBody, FuTableButtonColumn, FuQuickSearch, FuColumnSelect, FuSearchBar},
  mixins: [Locale],
  props: {
    header: String,
    searchConfig: Object,
    paginationConfig: Object,
    data: Array,
    buttons: Array,
  },
  watch: {
    columns: {
      handler: function () {
        this.key++ // 解决el-table tbody不能正确渲染的问题
      },
      deep: true
    }
  },
  methods: {
    search(condition, e) {
      this.$emit("search", condition, e)
    }
  },
  data() {
    return {
      key: 0,
      columns: []
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/common/mixins.scss";

@include b(dynamic-table) {
  @include e(header) {
    @include flex-row(flex-start, center);
    height: 60px;
    font-size: 20px;
  }

  @include e(tools) {
    @include flex-row(flex-end, center);
  }

  @include e(body) {
  }
}
</style>
