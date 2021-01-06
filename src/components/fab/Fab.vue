<template>
  <div :style="style" v-outside-click="outsideClickClose">
    <div class="fab-container" :style="containerStyle">
      <slot>
        <fab-item v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
      </slot>
    </div>
    <slot name="button">
      <fab-button :class="['fab', {'fab-active': active}]" :style="buttonStyle" :icon="getIcon" :size="buttonSize"
                  @click="click" @mousedown="mousedown"/>
    </slot>
  </div>
</template>

<script>

import FabItem from "@/components/fab/FabItem";
import FabButton from "@/components/fab/FabButton";
import OutsideClick from "element-ui/src/utils/clickoutside";

export default {
  name: "Fab",
  components: {FabButton, FabItem},
  directives: {OutsideClick},
  props: {
    items: Array,
    size: {
      type: String,
      default: "default",
      validator: value => ["big", "default", "medium", "small"].includes(value)
    },
    direction: {
      type: String,
      default: "top",
      validator: value => ["top", "bottom", "left", "right"].includes(value)
    },
    icon: {
      type: String,
      default: "el-icon-plus"
    },
    activeIcon: {
      type: String,
      default: "el-icon-close"
    },
    movable: {
      type: Boolean,
      default: false
    },
    right: {
      type: String,
      default: "10%"
    },
    bottom: {
      type: String,
      default: "10%"
    },
    backgroundColor: {
      type: String,
      default: "#409EFF",
    },
    color: {
      type: String,
      default: "#FFF",
    },
    zIndex: {
      type: Number,
      default: 5
    },
    clickClose: {
      type: Boolean,
      default: true
    },
    outsideClose: {
      type: Boolean,
      default: true
    },
    manual: {
      type: Boolean,
      default: false
    },
    savePosition: {
      type: Boolean,
      default: false
    },
    sizeOptions: {
      type: Object,
      default: () => {
        return {
          big: {
            fab: {size: 56},
            item: {size: 40, spacing: 0, titleFontSize: "14px", buttonFontSize: "18px"}
          },
          default: {
            fab: {size: 40},
            item: {size: 32, spacing: 0, titleFontSize: "14px", buttonFontSize: "16px"}
          },
          medium: {
            fab: {size: 36},
            item: {size: 28, spacing: 0, titleFontSize: "12px", buttonFontSize: "14px"}
          },
          small: {
            fab: {size: 32},
            item: {size: 24, spacing: 0, titleFontSize: "12px", buttonFontSize: "12px"}
          },
        }
      }
    },
  },
  data() {
    return {
      active: false,
      moving: false,
      style: {
        zIndex: this.zIndex,
        position: "fixed",
        left: undefined,
        top: undefined,
        right: this.right,
        bottom: this.bottom
      }
    }
  },
  provide() {
    return {
      fab: this
    };
  },
  methods: {
    toggle(active) {
      if (!this.moving && this.hashChildren) {
        this.active = active === undefined ? !this.active : active;
      }
    },
    close() {
      if (this.clickClose && !this.manual) {
        this.toggle(false);
      }
      this.$emit("close")
    },
    outsideClickClose() {
      if (this.outsideClose && !this.manual) {
        this.toggle(false);
      }
      this.$emit("outside-click")
    },
    click(e) {
      if (!this.manual) {
        this.toggle();
      }
      this.$emit("click", this.active, e)
    },
    mousedown() {
      if (this.movable) {
        document.addEventListener('mousemove', this.mousemove);
        document.addEventListener('mouseup', this.mouseup);
      }
    },
    mousemove(e) {
      this.moving = true;
      const rect = this.$el.getBoundingClientRect();
      let left = e.clientX - rect.width / 2;
      let top = e.clientY - rect.height / 2;
      this.style.left = left + 'px';
      this.style.top = top + 'px';
      delete this.style.right
      delete this.style.bottom
    },
    mouseup() {
      this.writePosition();
      document.removeEventListener('mousemove', this.mousemove);
      document.removeEventListener('mouseup', this.mouseup);
      setTimeout(() => this.moving = false)
    },
    writePosition() {
      if (this.savePosition) {
        localStorage.setItem("FabPosition", JSON.stringify(this.style));
      }
    },
    readPosition() {
      if (this.savePosition) {
        let position = localStorage.getItem("FabPosition")
        try {
          localStorage.getItem("FabPosition")
          if (position) {
            this.style = JSON.parse(position)
          }
        } catch (e) {
          console.warn("FabPosition error")
        }
      }
    }
  },
  computed: {
    hashChildren() {
      return this.$children.length > 1
    },
    getIcon() {
      return this.activeIcon === this.icon ? this.icon : this.active ? this.activeIcon : this.icon
    },
    config() {
      return this.sizeOptions[this.size] || this.sizeOptions["default"];
    },
    buttonSize() {
      return this.config.fab.size + "px"
    },
    buttonStyle() {
      let backgroundColor = this.backgroundColor;
      let color = this.color
      return {backgroundColor, color}
    },
    spacing() { // FAB按钮与FABItem的间距
      let spacing = this.config.item.spacing || 0;
      spacing += (this.config.fab.size - this.config.item.size) / 2
      return spacing;
    },
    containerStyle() { // container的位置，根据方向变化
      let position = this.config.fab.size + this.spacing;
      if (["top", "left"].includes(this.direction)) {
        position = -this.config.fab.size - this.spacing
      }

      let style = {};
      if (["top", "bottom"].includes(this.direction)) {
        style.top = position + "px";
      } else {
        style.left = position + "px";
      }
      return style;
    }
  },
  created() {
    this.readPosition();
  }
}
</script>

<style scoped>
.fab-container {
  position: absolute;
}

/deep/ .fab {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .3), 0 0 6px rgba(0, 0, 0, .3);
  transition: all 0.3s;
  transform: unset !important;
}

/deep/ .fab.fab-active {
  transform: rotate(360deg) !important;
}
</style>
