<template>
  <div :style="style" v-outside-click="outsideClickClose">
    <slot name="fab">
      <fu-speed-dial-button v-bind="buttonProps" @click="click" @mousedown="mousedown"/>
    </slot>
    <div :style="contentPosition">
      <slot>
        <fu-speed-dial-item v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
      </slot>
    </div>
  </div>
</template>

<script>
import OutsideClick from "element-ui/src/utils/clickoutside";
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton";
import FuSpeedDialItem from "@/components/speed-dial/FuSpeedDialItem";

export default {
  name: "FuSpeedDial",
  components: {FuSpeedDialItem, FuSpeedDialButton},
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
    position: {
      type: String,
      default: "fixed"
    },
    left: String,
    top: String,
    right: {
      type: String,
      default: "10%"
    },
    bottom: {
      type: String,
      default: "10%"
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
        position: this.position,
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom
      },
    }
  },
  provide() {
    return {
      FuSpeedDial: this
    }
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
      if (this.items && this.items.length > 0) {
        return true;
      }
      return this.$slots && this.$slots.default
    },
    config() {
      return this.sizeOptions[this.size] || this.sizeOptions["default"];
    },
    buttonProps() {
      let type = "primary"
      let rotate = true
      let active = true
      let size = this.config.fab.size + "px"
      let icon = this.activeIcon === this.icon ? this.icon : this.active ? this.activeIcon : this.icon
      return {type, rotate, active, size, icon}
    },
    spacing() {
      let spacing = this.config.item.spacing || 0;
      spacing += (this.config.fab.size - this.config.item.size) / 2
      return spacing;
    },
    contentPosition() {
      let position = this.config.fab.size + this.spacing;
      if (["top", "left"].includes(this.direction)) {
        position = -this.config.fab.size - this.spacing
      }

      let style = {position: "absolute"};
      if (["top", "bottom"].includes(this.direction)) {
        style.top = position + "px";
      } else {
        style.top = 0;
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
