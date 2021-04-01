<script>
import FuTableColumnSelectPopover from "./FuTableColumnSelectPopover";
import FuTableColumnSelectDialog from "./FuTableColumnSelectDialog";

export default {
  name: "FuTableColumnSelect",
  functional: true,
  render(h, {props, data, children}) {
    const {type} = props
    if (type === "dialog") {
      return h(FuTableColumnSelectDialog, data, children)
    } else {
      return h(FuTableColumnSelectPopover, data, children)
    }
  }
}
</script>
