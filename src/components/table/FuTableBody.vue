<script>
const isFix = node => {
  const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
  const {fix} = node.data.attrs
  let {type} = node.componentOptions.propsData
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
}

export default {
  name: "FuTableBody",
  functional: true,
  props: {
    columns: Array
  },
  render(h, context) {
    let {columns} = context.props
    const children = context.children.filter(c => c.tag !== undefined)
    const nodes = [];

    if (!children) return nodes
    if (!columns || columns?.length === 0) return children
    // 只渲染show为undefined或true的
    children.forEach((node, i) => {
      if (isFix(node) || columns[i]?.show !== false) {
        nodes.push(node);
      }
    })

    return nodes
  }
}
</script>
