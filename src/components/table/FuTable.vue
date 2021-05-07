<template>
  <el-table class="fu-table" v-on="$listeners" v-bind="$attrs" :key="key">
    <fu-table-body :columns="columns">
      <slot></slot>
    </fu-table-body>
  </el-table>
</template>

<script>
import FuTableBody from "@/components/table/FuTableBody";
import {randomId} from "@/tools/utils";

const isFix = node => {
  const {fix} = node.data.attrs
  let {type} = node.componentOptions.propsData
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type)
}

const getLabel = node => {
  let {label} = node.componentOptions.propsData
  label ??= node.data.attrs.label
  return label;
}

const cleanColumns = columns => {
  columns.splice(0, columns.length)
}

const initColumns = (nodes, columns) => {
  nodes.forEach(node => {
    let label = getLabel(node)
    const fix = isFix(node);
    if (!label && !fix) {
      throw new Error("unfixed column's label is required.")
    }
    if (!node.data.key) {
      node.data.key = label || randomId()
    }
    const {show} = node.data.attrs

    columns.push({label, show, fix})
  })
}

const copyColumns = (source, target) => {
  source.forEach(col => {
    target.push(col)
  })
}

const updateColumns = (nodes, columns) => {
  if (nodes.length !== columns.length) {
    cleanColumns(columns)
    initColumns(nodes, columns)
    return;
  }
  nodes.forEach((node, i) => {
    columns[i].label = getLabel(node)
    columns[i].fix = isFix(node)
    if (!node.data.key) {
      node.data.key = columns[i].label || randomId()
    }
  })
}

export default {
  name: "FuTable",
  components: {FuTableBody},
  props: {
    columns: Array,
    refresh: {
      type: Boolean,
      default: true
    },
    localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key
  },
  data() {
    return {
      key: 0
    }
  },
  watch: {
    columns: {
      handler: function () {
        // 设置refresh，可以避免抖动或闪烁，但是table会更新一次
        if (this.refresh) {
          this.key++
        }
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
    // 去掉v-if=false的node
    const children = this.$slots.default.filter(c => c.tag !== undefined)
    // 表格没有内容或者不需要选列
    if (!children || !this.columns) return

    // 需要读取localStorage
    if (this.localKey) {
      let columnsKey = localStorage.getItem(this.columnsKey)
      if (columnsKey) {
        try {
          cleanColumns(this.columns)
          const columns = JSON.parse(localStorage.getItem(this.columnsKey))
          copyColumns(columns, this.columns)
          // 如果保存的列跟实际的列冲突则以实际的为准
          updateColumns(children, this.columns)
          return
        } catch (e) {
          console.error("get columns error", e)
        }
      }
    }

    if (this.columns.length === 0) {
      initColumns(children, this.columns)
    }
  }
}
</script>
