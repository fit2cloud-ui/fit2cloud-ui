<template>
  <div class="fu-speed-dial" :style="style" v-outside-click="outsideClickClose">
    <div class="fu-speed-dial__content">
      <slot name="fab">
        <fu-speed-dial-button v-bind="buttonProps" @click="click" @mousedown="mousedown"/>
      </slot>
      <div :style="contentPosition">
        <slot>
          <fu-speed-dial-item v-for="(item, index) in items" :index="index" :key="index" v-bind="item"
                              @click="itemClick"/>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import OutsideClick from "element-ui/src/utils/clickoutside"
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton"
import FuSpeedDialItem from "@/components/speed-dial/FuSpeedDialItem"

const updateStyle = function () {
  const {zIndex, position, left, top, right, bottom} = this
  this.style = {zIndex, position, left, top, right, bottom}
}

export default {
  name: "FuSpeedDial",
  components: {FuSpeedDialItem, FuSpeedDialButton},
  directives: {OutsideClick},
  props: {
    id: String,
    value: Boolean,
    type: {
      type: String,
      default: "primary"
    },
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
      validator: value => ["absolute", "fixed"].includes(value)
    },
    left: String,
    top: String,
    right: String,
    bottom: String,
    zIndex: {
      type: [String, Number],
      default: 99
    },
    itemClickClose: {
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
    localKey: String,
    sizeOptions: {
      type: Object,
      default: () => {
        return {
          big: {
            fab: {size: 56, fontSize: "18px"},
            item: {size: 40, spacing: 0, titleFontSize: "14px", buttonFontSize: "18px"}
          },
          default: {
            fab: {size: 40, fontSize: "16px"},
            item: {size: 32, spacing: 0, titleFontSize: "14px", buttonFontSize: "16px"}
          },
          medium: {
            fab: {size: 36, fontSize: "14px"},
            item: {size: 28, spacing: 0, titleFontSize: "12px", buttonFontSize: "14px"}
          },
          small: {
            fab: {size: 32, fontSize: "12px"},
            item: {size: 24, spacing: 0, titleFontSize: "12px", buttonFontSize: "12px"}
          },
        }
      }
    },
  },
  data() {
    const {zIndex, position, left, top, right, bottom} = this

    return {
      active: false,
      moving: false,
      style: {zIndex, position, left, top, right, bottom}
    }
  },
  watch: {
    value(v) {
      this.active = v;
    },
    position: updateStyle,
    zIndex: updateStyle,
    left: updateStyle,
    right: updateStyle,
    top: updateStyle,
    bottom: updateStyle,
  },
  provide() {
    return {
      FuSpeedDial: this
    }
  },
  methods: {
    toggle(active) {
      if (!this.moving && this.hashChildren) {
        this.active = active === undefined ? !this.active : active
      }
    },
    close() {
      if (this.itemClickClose && !this.manual) {
        this.toggle(false)
      }
      const {id, active} = this
      this.$emit("close", {id, active})
    },
    outsideClickClose() {
      if (this.outsideClose && !this.manual) {
        this.toggle(false)
      }
      const {id, active} = this
      this.$emit("outside-click", {id, active})
    },
    click(e) {
      if (!this.manual) {
        this.toggle()
      }
      const {id, active} = this
      this.$emit("click", {id, active}, e)
    },
    mousedown() {
      if (this.movable) {
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove(e) {
      this.moving = true
      if (this.position === "fixed") {
        const rect = this.$el.getBoundingClientRect()
        let left = e.clientX - rect.width / 2
        let top = e.clientY - rect.height / 2
        this.style.left = left + 'px'
        this.style.top = top + 'px'
        delete this.style.right
        delete this.style.bottom
      }

      if (this.position === "absolute") {
        const {offsetLeft, offsetTop, clientWidth, clientHeight, offsetParent} = this.$el
        const maxWidth = offsetParent.clientWidth - clientWidth
        const maxHeight = offsetParent.clientHeight - clientHeight

        let left = offsetLeft + e.movementX
        let top = offsetTop + e.movementY
        if (left > 0 && left < maxWidth) {
          this.style.left = left + 'px'
          delete this.style.right
        }
        if (top > 0 && top < maxHeight) {
          this.style.top = top + 'px'
          delete this.style.bottom
        }
      }
    },
    mouseup() {
      this.writePosition()
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
      setTimeout(() => this.moving = false)
    },
    writePosition() {
      if (this.localKey) {
        localStorage.setItem(this.saveKey, JSON.stringify(this.style))
      }
    },
    readPosition() {
      if (this.savePosition) {
        let position = localStorage.getItem(this.saveKey)
        try {
          localStorage.getItem(this.saveKey)
          if (position) {
            this.style = JSON.parse(position)
          }
        } catch (e) {
          console.warn(this.saveKey + " error", e)
        }
      }
    },
    itemClick(arg, e) {
      console.log(arg)
      const {index} = arg
      if (index !== undefined) {
        const item = this.items[index];
        if (item.click && typeof item.click === "function") return item.click(arg, e)
      }
    }
  },
  computed: {
    saveKey({localKey}) {
      return "Fu-SD-" + localKey
    },
    hashChildren() {
      if (this.items && this.items.length > 0) {
        return true
      }
      return this.$slots && this.$slots.default
    },
    config() {
      return this.sizeOptions[this.size] || this.sizeOptions["default"]
    },
    buttonProps() {
      let type = this.type
      let rotate = true
      let active = this.active
      let size = this.config.fab.size + "px"
      let fontSize = this.config.fab.fontSize
      let icon = this.activeIcon === this.icon ? this.icon : this.active ? this.activeIcon : this.icon
      return {type, rotate, active, size, fontSize, icon}
    },
    spacing() {
      let spacing = this.config.item.spacing || 0
      spacing += (this.config.fab.size - this.config.item.size) / 2
      return spacing
    },
    contentPosition() {
      let position = this.config.fab.size + this.spacing
      if (["top", "left"].includes(this.direction)) {
        position = -this.config.fab.size - this.spacing
      }

      let style = {position: "absolute", zIndex: this.zIndex}
      if (["top", "bottom"].includes(this.direction)) {
        style.top = position + "px"
      } else {
        style.top = 0
        style.left = position + "px"
      }
      return style
    }
  },
  created() {
    this.readPosition()
  }
}
</script>
