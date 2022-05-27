<template>
  <el-popover class="fu-table-column-select" popper-class="fu-table-column-select-popper" trigger="click"
              v-if="hasSelect" v-bind="$attrs">
    <div class="fu-table-column-select-popper__header">
      {{ t('fu.table.columns_title') }}
    </div>
    <div class="fu-table-column-select-popper__body">
      <div v-for="(c, i) in columns" :key="i" class="fu-table-column-select-popper__item">
        <el-checkbox v-model="c.show" :checked="c.show !== false"
                     draggable="true" @dragstart.native="dragstart($event, i)" @dragenter.native="dragenter"
                     @dragleave.native="dragleave" @dragover.native.prevent @dragend.native="dragend"
                     @drop.native="drop($event, columns, i)" v-show="!c.fix">
          {{ c.label }}
        </el-checkbox>
      </div>
    </div>
    <div class="fu-table-column-select-popper__footer">
      <el-button :size="configSize" @click="reset" v-if="columnsKey">{{ t('fu.table.reset') }}</el-button>
    </div>
    <el-button slot="reference" @click="open" :size="configSize">
      <i class="el-icon-setting"/> {{ t('fu.table.columns') }}
    </el-button>
  </el-popover>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import mixins from "@/components/table/table-column-select/mixins";

export default {
  name: "FuTableColumnSelectButton",
  components: {FuSearchBarButton},
  mixins: [mixins],
  methods: {
    reset() {
      if (this.columnsKey) {
        localStorage.removeItem(this.columnsKey)
      }
      this.columns.splice(0, this.columns.length)
    }
  }
}
</script>
