<script>
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
    const slots = context.slots()
    const nodes = [];
    if (!slots.default) return nodes

    // 初始化
    if (columns.length === 0) {
      slots.default.forEach(node => {
        const {label, show, width} = node.componentOptions.propsData
        if (!label) {
          throw new Error("column's label is required.")
        }
        columns.push({label, show})
        if (show !== false) {
          nodes.push(node);
        }
      })
    } else {
      // 只渲染show为undefined或true的
      slots.default.forEach((node, i) => {
        if (columns[i].show !== false) {
          nodes.push(node);
        }
      })
    }
    if (nodes.length > 0) {
      nodes[nodes.length - 1].componentOptions.propsData.width = undefined;
    }
    return nodes
  },
}
</script>
