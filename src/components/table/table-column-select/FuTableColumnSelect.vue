<script>
import FuTableColumnSelectButton from "./FuTableColumnSelectButton";
import FuTableColumnSelectIcon from "./FuTableColumnSelectIcon";

export default {
  name: "FuTableColumnSelect",
  functional: true,
  render(h, {props, data, children}) {
    const {type} = props
    if (type === "icon") {
      return h(FuTableColumnSelectIcon, data, children)
    } else {
      return h(FuTableColumnSelectButton, data, children)
    }
  }
}
</script>
