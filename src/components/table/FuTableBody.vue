<script>
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

const initColumns = (nodes, columns) => {
  nodes.forEach(node => {
    let label = getLabel(node)
    const fix = isFix(node);
    if (!label && !fix) {
      throw new Error("unfixed column's label is required.")
    }
    const {show} = node.data.attrs

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
    columns[i].label = getLabel(node)
    columns[i].fix = isFix(node)
  })
}

export default {
  name: "FuTableBody",
  functional: true,
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    let {columns} = context.props
    const children = context.children
    const nodes = [];

    if (!children) return nodes

    if (columns.length === 0) {
      // 初始化columns
      initColumns(children, columns)
    } else {
      updateColumns(children, columns)
      // 只渲染show为undefined或true的
      children.forEach((node, i) => {
        if (isFix(node) || columns[i].show !== false) {
          nodes.push(node);
        }
      })
    }

    return nodes
  }
}
</script>
