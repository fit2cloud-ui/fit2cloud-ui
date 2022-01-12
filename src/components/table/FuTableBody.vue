<script>
const isFix = node => {
  const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
  const {fix} = node.data.attrs
  let {type} = node.componentOptions.propsData
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
}

const getLabel = node => {
  if (node.data.key) return node.data.key
  const prefix = "FU-T-"
  const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
  let {label, type} = node.componentOptions.propsData
  if (includeTag) label = prefix + "dropdown"
  label ??= node.data.attrs.label
  label ??= prefix + type
  return label
}

export default {
  name: "FuTableBody",
  functional: true,
  props: {
    columns: Array
  },
  render(h, context) {
    const nodes = [];
    let {columns} = context.props
    const children = context.children.filter(c => c.tag !== undefined)
    if (!children) return nodes
    if (!columns || columns?.length === 0) return children
    columns.forEach(col => {
      let node = children.find(child => {
        return col.label === getLabel(child)
      })
      if (node && (isFix(node) || col.show !== false)) {
        nodes.push(node);
      }
    })

    return nodes
  }
}
</script>
