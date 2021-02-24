<template>
  <el-table class="fu-table" v-on="$listeners" v-bind="$attrs" :key="key">
    <fu-table-body :columns="columns" :refresh-key="key">
      <slot></slot>
    </fu-table-body>
  </el-table>
</template>

<script>
import FuTableBody from "@/components/table/FuTableBody";

export default {
  name: "FuTable",
  components: {FuTableBody},
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key
  },
  data() {
    return {
      key: 0,
    }
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
  computed: {
    columnsKey() {
      return "FU-T-" + this.localKey
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
