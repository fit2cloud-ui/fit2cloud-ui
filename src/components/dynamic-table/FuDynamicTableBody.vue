<script>
const isFix = node => {
  const {fix} = node.data.attrs
  return fix !== undefined && fix !== false
}

const initColumns = (nodes, columns) => {
  nodes.forEach(node => {
    let {label} = node.componentOptions.propsData
    label ??= node.data.attrs.label
    if (!label) {
      throw new Error("column's label is required.")
    }
    const {show} = node.data.attrs
    const fix = isFix(node);

    columns.push({label, show, fix})
  })
}

const updateColumns = (nodes, columns) => {
  // 如果列数修改了，则清空，重新初始化
  if (nodes.length !== columns.length) {
    columns.splice(0, columns.length)
    return
  }
  nodes.forEach((node, i) => {
    const fix = isFix(node);
    if (fix !== columns[i].fix) {
      columns[i].fix = fix
    }
  })
}

let key = 0

export default {
  name: "FuDynamicTableBody",
  functional: true,
  props: {
    refreshKey: Number,
    columns: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    let {columns, refreshKey} = context.props
    const children = context.children
    const nodes = [];

    if (!children) return nodes

    if (columns.length === 0) {
      // 初始化columns
      initColumns(children, columns)
    } else {
      // 避免因为外部刷新，导致渲染2次nodes
      if (key !== refreshKey) {
        updateColumns(children, columns)
        key = refreshKey
        return []
      }
      // 只渲染show为undefined或true的
      children.forEach((node, i) => {
        if (isFix(node) || columns[i].show !== false) {
          nodes.push(node);
        }
      })
    }

    // 如果只有操作列，则不显示操作列
    if (nodes.length === 1 && [nodes[0].componentOptions.tag === "fu-table-button-column"]) {
      return []
    }

    return nodes
  }
}
</script>
