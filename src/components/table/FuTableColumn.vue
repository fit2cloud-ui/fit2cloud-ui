<script>
const EL_COLUMN_TYPES = ["selection", "index", "expand"]

export default {
  name: "FuTableColumn",
  functional: true,
  render(h, {data, props, children}) {
    const {fix, show, type} = props
    const isSpeType = EL_COLUMN_TYPES.includes(type)
    data.props = {
      ...props
    }
    if (show !== false || fix !== false || !isSpeType) {
      return h('el-table-column', data, children)
    }

    return []
  }
}
</script>
