<template>
  <el-popover trigger="manual"
              v-model="visible"
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
    <div class="fu-table-column-select__footer">
      <el-button type="primary" :size="size" @click="ok">{{ t('fu.table.ok') }}</el-button>
    </div>

    <el-tooltip :content="t('fu.table.select_columns')" slot="reference">
      <i class="fu-table-column-select__trigger" :class="icon" @click="toggle"/>
    </el-tooltip>
  </el-popover>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import mixins from "./mixins";

const cloneColumns = (source, target) => {
  source.forEach(col => {
    target.push(Object.assign({}, col))
  })
  return target;
}

export default {
  name: "FuTableColumnSelectConfirm",
  components: {FuSearchBarButton},
  mixins: [mixins],
  data() {
    return {
      cloneColumns: [],
      visible: false
    }
  },
  methods: {
    toggle() {
      if (!this.visible) {
        this.cloneColumns = []
        cloneColumns(this.columns, this.cloneColumns);
      }
      this.visible = !this.visible
    },
    ok() {
      this.columns.forEach((c, i) => {
        c.show = this.cloneColumns[i].show;
      })
      this.visible = false
    }
  },
  computed: {
    selectable() {
      return this.cloneColumns.filter(c => !c.fix)
    },
  }
}
</script>
