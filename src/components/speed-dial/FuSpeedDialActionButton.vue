<template>
  <div class="fu-speed-dial-action-button">
    <div v-if="title" class="fu-speed-dial-action-button__title" :style="titleSize">
      <slot name="title">
        <div class="fu-speed-dial-action-button__text" :class="titleClass" :style="titleStyle" @click="click">{{
            title }}
        </div>
      </slot>
    </div>
    <slot>
      <fu-speed-dial-button :class="buttonClass" v-bind="buttonProps" :icon="icon" @click="click"/>
    </slot>
  </div>
</template>

<script>
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton";

export default {
  name: "FuSpeedDialActionButton",
  components: {FuSpeedDialButton},
  props: {
    index: Number,
    icon: {
      type: String,
      default: "el-icon-plus"
    },
    titleClass: String,
    titleBgColor: String,
    titleColor: String,
    buttonClass: String,
    bgColor: String,
    color: String,
    title: [String, Number]
  },
  inject: ["FuSpeedDial"],
  computed: {
    config() {
      return this["FuSpeedDial"].config;
    },
    direction() {
      return this["FuSpeedDial"].direction;
    },
    clickClose() {
      return this["FuSpeedDial"].clickClose;
    },
    titleSize() {
      let size = this.config.fab.size + "px";
      let style = {position: "absolute", height: size};
      if (["top", "bottom"].includes(this.direction)) {
        style.textAlign = "right"
        style.right = size
      } else {
        style.textAlign = "center"
        style.minWidth = size
        if (this.index % 2 === 0) {
          style.top = size
        } else {
          style.top = "-" + size
        }
      }
      return style;
    },
    titleStyle() {
      let backgroundColor = this.titleBgColor;
      let color = this.titleColor
      let fontSize = this.config.item.titleFontSize
      return {backgroundColor, color, fontSize}
    },
    buttonProps() {
      let backgroundColor = this.bgColor;
      let color = this.color
      let fontSize = this.config.item.buttonFontSize
      let size = this.config.item.size + "px";
      return {backgroundColor, color, fontSize, size}
    },
  },
  methods: {
    click(e) {
      const {index, title} = this
      this.$emit("click", {index, title}, e);
      this["FuSpeedDial"].close();
    }
  }
}
</script>
