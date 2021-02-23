<script>
const EL_COLUMN_TYPES = ["selection", "index", "expand"]

const isFix = node => {
  const {fix, type} = node.data.attrs
  return (fix !== undefined && fix !== false) || EL_COLUMN_TYPES.includes(type)
}


const isShow = node => {
  const {show} = node.data.attrs
  return (show !== undefined && show !== false) || isFix(node)
}

const initColumns = (nodes, columns) => {
  nodes.forEach(node => {
    const {label} = node.data.attrs
    const fix = isFix(node);
    const show = isShow(node);
    if (!label && !fix) {
      throw new Error("unfixed column's label is required.")
    }

    columns.push({label, show, fix})
  })
}

const updateColumns = (nodes, columns) => {
  // 如果列数修改了，则清空，重新初始化
  if (nodes.length !== columns.length) {
    columns.splice(0, columns.length)
    initColumns(nodes, columns)
    return
  }

  nodes.forEach((node, i) => {
    const {label} = node.data.attrs
    columns[i].label = label
    columns[i].fix = isFix(node)
  })
}
export default {
  name: "FuTable",
  functional: true,
  render(h, {data, props, children}) {
    data.class = "fu-table"
    let {columns} = props
    const nodes = [];

    if (!children) return nodes

    if (columns.length === 0) {
      // 初始化columns
      initColumns(children, columns)
    } else {
      // 更新columns
      updateColumns(children, columns)

      children.forEach((node, i) => {
        const {fix, show} = columns[i]
        if (fix || show) {
          nodes.push(node);
        }
      })
    }

    return h('el-table', data, nodes)
  }
}
</script>
