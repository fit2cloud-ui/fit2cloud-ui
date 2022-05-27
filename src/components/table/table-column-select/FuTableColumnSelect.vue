<script>
import FuTableColumnSelectPopover from "./FuTableColumnSelectPopover";
import FuTableColumnSelectDialog from "./FuTableColumnSelectDialog";
import FuTableColumnSelectButton from "./FuTableColumnSelectButton";

export default {
  name: "FuTableColumnSelect",
  functional: true,
  render(h, {props, data, children}) {
    const {type} = props
    switch (type) {
      case "dialog":
        return h(FuTableColumnSelectDialog, data, children)
      case "button":
        return h(FuTableColumnSelectButton, data, children)
      default:
        return h(FuTableColumnSelectPopover, data, children)
    }
  }
}
</script>
