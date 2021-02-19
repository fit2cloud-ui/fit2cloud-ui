<script>
const isFix = attrs => {
  const {fix} = attrs
  return fix !== undefined && fix !== false
}
export default {
  name: "FuSelectableTableBody",
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

    // 初始化
    if (columns.length === 0) {
      children.forEach(node => {
        let {label} = node.componentOptions.propsData
        label ??= node.data.attrs.label
        const {show} = node.data.attrs
        const fix = isFix(node.data.attrs);
        if (!label) {
          throw new Error("column's label is required.")
        }
        columns.push({label, show, fix})
      })
    } else {
      // 只渲染show为undefined或true的
      children.forEach((node, i) => {
        let {label} = node.componentOptions.propsData
        if (isFix(node.data.attrs) || columns[i].show !== false) {
          nodes.push(node);
          console.log(label, node)
        }
      })
    }

    return h('el-table', context.data, nodes)
  }
}
</script>
