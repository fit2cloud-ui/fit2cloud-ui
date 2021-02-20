<script>
const isFix = node => {
  const {fix} = node.data.attrs
  return fix !== undefined && fix !== false
}

export default {
  name: "FuDynamicTableBody",
  functional: true,
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    const {columns} = context.props
    const children = context.children
    const nodes = [];

    if (!children) return nodes

    if (columns.length === 0) {
      // 初始化columns
      children.forEach(node => {
        let {label} = node.componentOptions.propsData
        label ??= node.data.attrs.label
        if (!label) {
          throw new Error("column's label is required.")
        }
        const {show} = node.data.attrs
        const fix = isFix(node);

        columns.push({label, show, fix})
      })
    } else {
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
