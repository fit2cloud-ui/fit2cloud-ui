<template>
  <div class="flex-center">
    <div v-if="title" class="flex-center fab-item-title-container" :style="titleContainerStyle">
      <slot name="title">
        <div class="fab-item-title" :class="titleClass" :style="titleStyle" @click="click">{{ title }}</div>
      </slot>
    </div>
    <div class="flex-center" :style="buttonContainerStyle">
      <slot>
        <fab-button :class="buttonClass" :style="buttonStyle" :icon="icon" :size="buttonSize" @click="click"/>
      </slot>
    </div>
  </div>
</template>

<script>
import FabButton from "@/components/fab/FabButton";

export default {
  name: "FabItemButton",
  components: {FabButton},
  props: {
    index: Number,
    icon: String,
    titleClass: String,
    titleBgColor: {
      type: String,
      default: "#FFF",
    },
    titleColor: {
      type: String,
      default: "#222",
    },
    buttonClass: String,
    bgColor: {
      type: String,
      default: "#FFF",
    },
    color: {
      type: String,
      default: "#222",
    },
    title: [String, Number]
  },
  inject: ["fab"],
  computed: {
    direction() {
      return this["fab"].direction;
    },
    clickClose() {
      return this["fab"].clickClose;
    },
    containerSize() {
      return this["fab"].config.fab.size + "px";
    },
    titleContainerStyle() {
      let style = {height: this.containerSize};
      if (["top", "bottom"].includes(this.direction)) {
        style.textAlign = "right"
        style.right = this.containerSize
      } else {
        style.textAlign = "center"
        style.minWidth = this.containerSize
        if (this.index % 2 === 0) {
          style.top = this.containerSize
        } else {
          style.top = "-" + this.containerSize
        }
      }
      return style;
    },
    titleFontSize() {
      return this["fab"].config.item.titleFontSize;
    },
    titleStyle() {
      let backgroundColor = this.titleBgColor;
      let color = this.titleColor
      let fontSize = this.titleFontSize
      return {backgroundColor, color, fontSize}
    },
    buttonContainerStyle() {
      return {
        width: this.containerSize,
        height: this.containerSize,
      }
    },
    buttonFontSize() {
      return this["fab"].config.item.buttonFontSize;
    },
    buttonStyle() {
      let backgroundColor = this.bgColor;
      let color = this.color
      let fontSize = this.buttonFontSize
      return {backgroundColor, color, fontSize}
    },
    buttonSize() {
      return this["fab"].config.item.size + "px";
    },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
      this["fab"].close();
    }
  }
}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fab-item-title-container {
  position: absolute;
}

.fab-item-title {
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  line-height: 1;
  box-sizing: border-box;
  border-radius: 2px;
}

.fab-item-title:hover {
  transform: scale(1.1);
}

.fab-item-title:active {
  transform: scale(1);
}
</style>
