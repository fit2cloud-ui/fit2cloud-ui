<script>
const isFix = node => {
  const {fix} = node.data.attrs
  let {type} = node.componentOptions.propsData
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type)
}

export default {
  name: "FuTableBody",
  functional: true,
  props: {
    columns: Array
  },
  render(h, context) {
    let {columns} = context.props
    const children = context.children
    const nodes = [];

    if (!children) return nodes
    if (!columns) return children
    // 只渲染show为undefined或true的
    children.forEach((node, i) => {
      if (isFix(node) || columns[i].show !== false) {
        nodes.push(node);
      }
    })

    return nodes
  }
}
</script>
