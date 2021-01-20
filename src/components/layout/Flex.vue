<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
const DIRECTIONS = ["row", "row-reverse", "column", "column-reverse"];
const WRAPS = ["nowrap", "wrap", "wrap-reverse"];
const JUSTIFY_CONTENTS = ["flex-start", "flex-end", "center", "space-between", "space-around"];
const ALIGN_ITEMS = ["flex-start", "flex-end", "center", "baseline", "stretch"];
const isValid = (value, scope) => {
  return scope[0] !== value && scope.includes(value);
}

export default {
  name: "Flex",
  props: {
    direction: {
      type: String,
      validator: value => DIRECTIONS.includes(value)
    },
    wrap: {
      type: String,
      validator: value => WRAPS.includes(value)
    },
    justifyContent: {
      type: String,
      validator: value => JUSTIFY_CONTENTS.includes(value)
    },
    alignItems: {
      type: String,
      validator: value => ALIGN_ITEMS.includes(value)
    },
  },
  computed: {
    style() {
      let style = {display: "flex"};
      if (isValid(this.direction, DIRECTIONS)) {
        style["flex-direction"] = this.direction;
      }
      if (isValid(this.wrap, WRAPS)) {
        style["flex-wrap"] = this.wrap;
      }
      if (isValid(this.justifyContent, JUSTIFY_CONTENTS)) {
        style["justify-content"] = this.justifyContent;
      }
      if (isValid(this.alignItems, ALIGN_ITEMS)) {
        style["align-items"] = this.alignItems;
      }
      if (this.grow > 0) {
        style["flex-grow"] = this.grow;
      }
      if (this.shrink > 0) {
        style["flex-shrink"] = this.shrink;
      }
      if (this.order > 0) {
        style["order"] = this.order;
      }
      return style
    }
  }
}
</script>

<style scoped>
</style>
