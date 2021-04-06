<script>
import FuHorizontalSteps from "./FuHorizontalSteps";
import FuVerticalSteps from "./FuVerticalSteps";
export default {
  name: "FuSteps",
  functional: true,
  render(h, { props, data, children }) {
    const { direction } = props;
    if (direction === "vertical") {
      return h(FuVerticalSteps, data, children);
    } else {
      return h(FuHorizontalSteps, data, children);
    }
  },
};
</script>
