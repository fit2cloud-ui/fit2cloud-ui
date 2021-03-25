<template>
  <el-popover :trigger="trigger"
              :visible-arrow="false"
              class="fu-table-column-select"
              popper-class="fu-table-column-select-popper"
              v-if="hasSelect">
    <div class="fu-table-column-select__title">
      {{ t('fu.table.select_columns') }}
    </div>
    <div class="fu-table-column-select__body">
      <div v-for="(c, i) in selectable" :key="i" class="fu-table-column-select__item">
        <el-checkbox v-model="c.show" :checked="c.show !== false">
          {{ c.label }}
        </el-checkbox>
      </div>
    </div>
    <fu-search-bar-button slot="reference" :icon="icon" :size="configSize"/>
  </el-popover>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import mixins from "@/components/table/table-column-select/mixins";

export default {
  name: "FuTableColumnSelectImmediate",
  components: {FuSearchBarButton},
  mixins: [mixins],
}
</script>
