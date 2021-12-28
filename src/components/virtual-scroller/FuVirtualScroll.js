import FuVirtualVerticalScroll from "./FuVirtualVerticalScroll";
import FuVirtualHorizontalScroll from "./FuVirtualHorizontalScroll";

export default {
  name: "FuVirtualScroll",
  functional: true,
  render(h, {props, data, children}) {
    const {horizontal} = props
    if (horizontal === undefined || horizontal === false) {
      return h(FuVirtualVerticalScroll, data, children)
    } else {
      return h(FuVirtualHorizontalScroll, data, children)
    }
  }
}
