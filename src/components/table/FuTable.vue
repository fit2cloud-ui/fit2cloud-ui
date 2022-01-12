<template>
  <el-table class="fu-table" v-on="$listeners" v-bind="$attrs" :key="key">
    <fu-table-body :columns="columns">
      <slot></slot>
    </fu-table-body>
  </el-table>
</template>

<script>
import FuTableBody from "@/components/table/FuTableBody";

const prefix = "FU-T-"

const isFix = node => {
  const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
  const {fix} = node.data.attrs
  let {type} = node.componentOptions.propsData
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
}

const getLabel = node => {
  if (node.data.key) return node.data.key
  const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
  let {label, type} = node.componentOptions.propsData
  if (includeTag) label = prefix + "dropdown"
  label ??= node.data.attrs.label
  label ??= prefix + type
  return label;
}

const cleanColumns = columns => {
  columns.splice(0, columns.length)
}

const initColumns = (nodes, columns) => {
  nodes.forEach(node => {
    const label = getLabel(node)
    const fix = isFix(node);
    const {show} = node.data.attrs
    if (!label && !fix) {
      throw new Error("unfixed column's label is required.")
    }

    columns.push({label, show, fix})
  })
}

const copyColumns = (source, target) => {
  source.forEach(col => {
    target.push(col)
  })
}

const updateColumns = (nodes, columns) => {
  if (columns === undefined) return
  // 如果保存的列跟实际的列冲突则以实际的为准
  if (nodes.length !== columns.length) {
    cleanColumns(columns)
    initColumns(nodes, columns)
  }

  if (columns.some(col => col.label === undefined)) {
    columns.forEach((col, i) => {
      col.label ??= getLabel(nodes[i])
    })
  }
}

const updateNodes = nodes => {
  nodes.forEach(node => {
    if (!node.data.key) {
      node.data.key = getLabel(node)
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
  provide() {
    return {
      localKey: this.localKey
    }
  },
  computed: {
    columnsKey() {
      return prefix + this.localKey
    }
  },
  updated() {
    const children = this.$slots.default.filter(c => c.tag !== undefined)
    updateNodes(children)
    updateColumns(children, this.columns)
  },
  created() {
    // 去掉v-if=false的node
    const children = this.$slots.default.filter(c => c.tag !== undefined)
    updateNodes(children)
    // 表格没有内容或者不需要选列
    if (!children || !this.columns) return

    // 需要读取localStorage
    if (this.localKey) {
      let str = localStorage.getItem(this.columnsKey)
      if (str) {
        try {
          const columns = JSON.parse(str)
          cleanColumns(this.columns)
          copyColumns(columns, this.columns)
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
