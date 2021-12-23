<template>
  <div style="display: inline-block">
    <el-tooltip :content="t('fu.table.custom_table_fields')">
      <fu-search-bar-button :icon="icon" :size="configSize" @click="visible = true"/>
    </el-tooltip>

    <el-dialog custom-class="fu-table-column-select-dialog" :visible.sync="visible" @open="open" append-to-body>
      <template #title>
        <h3>{{ t('fu.table.custom_table_fields') }}</h3>
        <el-alert :title="t('fu.table.custom_table_fields_desc')" type="info" :closable="false"/>
      </template>

      <el-checkbox v-for="(c, i) in selectable" :key="i" v-model="c.show" :checked="c.show !== false">
        {{ c.label }}
      </el-checkbox>

      <template #footer>
        <el-button type="primary" :size="configSize" @click="ok">{{ t('fu.table.ok') }}</el-button>
      </template>
    </el-dialog>
  </div>

</template>

<script>
import mixins from "./mixins";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";

const cloneColumns = (source, target) => {
  source.forEach(col => {
    target.push(Object.assign({}, col))
  })
  return target;
}
export default {
  name: "FuTableColumnSelectDialog",
  components: {FuSearchBarButton},
  mixins: [mixins],
  data() {
    return {
      cloneColumns: [],
      visible: false
    }
  },
  methods: {
    open() {
      this.cloneColumns = []
      cloneColumns(this.columns, this.cloneColumns);
    },
    ok() {
      this.columns.splice(0, this.columns.length)
      this.cloneColumns.forEach(c => {
        this.columns.push(c)
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
