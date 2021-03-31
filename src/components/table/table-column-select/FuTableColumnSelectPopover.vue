<template>
  <el-popover class="fu-table-column-select" popper-class="fu-table-column-select-popper" :trigger="trigger"
              :visible-arrow="false" v-if="hasSelect">
    <h3>
      {{ t('fu.table.custom_table_fields') }}
    </h3>
    <div class="fu-table-column-select-popper__body">
      <div v-for="(c, i) in selectable" :key="i" class="fu-table-column-select-popper__item">
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
  name: "FuTableColumnSelectPopover",
  components: {FuSearchBarButton},
  mixins: [mixins],
}
</script>
