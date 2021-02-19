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
      <slot name="body">
        <el-table v-on="$listeners" v-bind="$attrs" :data="data">
          <fu-selectable-column :columns="columns">
            <slot></slot>
          </fu-selectable-column>
          <slot name="buttons">
            <fu-table-buttons :buttons="buttons" v-if="buttons"/>
          </slot>
        </el-table>
      </slot>
    </div>
  </div>
</template>

<script>
import FuSearchBar from "../search-bar"
import FuQuickSearch from "../search-bar/FuQuickSearch";
import FuColumnSelect from "../dynamic-table/FuColumnSelect";
import FuTableButtons from "./table-buttons/FuTableButtons";
import FuSelectableColumn from "@/components/dynamic-table/FuSelectableTableBody";

export default {
  name: "FuDynamicTable",
  components: {FuSelectableColumn, FuTableButtons, FuQuickSearch, FuColumnSelect, FuSearchBar},
  props: {
    header: String,
    searchConfig: Object,
    paginationConfig: Object,
    data: Array,
    buttons: Array,
  },
  methods: {
    search(condition, e) {
      this.$emit("search", condition, e)
    }
  },
  data() {
    return {
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
