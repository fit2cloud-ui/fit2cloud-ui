<script>
import FuTableColumnSelectImmediate from "./FuTableColumnSelectImmediate";
import FuTableColumnSelectConfirm from "./FuTableColumnSelectConfirm";

export default {
  name: "FuTableColumnSelect",
  functional: true,
  render(h, {props, data, children}) {
    const {type} = props
    if (type === "confirm") {
      return h(FuTableColumnSelectConfirm, data, children)
    } else {
      return h(FuTableColumnSelectImmediate, data, children)
    }
  }
}
</script>
