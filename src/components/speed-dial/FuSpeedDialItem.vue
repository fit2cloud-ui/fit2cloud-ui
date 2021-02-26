<template>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="isActive" class="fu-speed-dial-item" :style="itemSize">
      <slot>
        <fu-speed-dial-action-button :index="getIndex" v-bind="item" @click="click"/>
      </slot>
    </div>
  </transition>
</template>

<script>
import FuSpeedDialActionButton from "@/components/speed-dial/FuSpeedDialActionButton";

export default {
  name: "FuSpeedDialItem",
  components: {FuSpeedDialActionButton},
  props: {
    index: {
      type: Number,
      required: true
    },
    item: Object,
  },
  inject: ["FuSpeedDial"],
  computed: {
    getIndex() {
      return this.item === undefined || this.item.index === undefined ? this.index : this.item.index;
    },
    config() {
      return this["FuSpeedDial"].config
    },
    isActive() {
      return this["FuSpeedDial"].active
    },
    size() {
      return this["FuSpeedDial"].size
    },
    direction() {
      return this["FuSpeedDial"].direction
    },
    spacing() {
      return this.config.item.spacing || 0;
    },
    directionPosition() {
      if (["top", "left"].includes(this.direction)) {
        return -this.config.fab.size - this.spacing
      }
      return this.config.fab.size + this.spacing
    },
    itemSize() {
      let size = this.config.fab.size + "px";
      return {
        width: size,
        height: size,
      }
    },
  },
  methods: {
    setPosition(el, position) {
      if (["top", "bottom"].includes(this.direction)) {
        el.style.top = position
      } else {
        el.style.left = position
      }
    },
    beforeEnter(el) {
      el.style.transition = "all 0.3s"
      el.style.position = "absolute"
      this.setPosition(el, 0)
      el.style.opacity = 0
    },
    enter(el, done) {
      let position = this.index * this.directionPosition + "px"
      setTimeout(() => {
        this.setPosition(el, position)
        el.style.opacity = 1
        done()
      })
    },
    leave(el, done) {
      this.setPosition(el, 0)
      el.style.opacity = 0
      setTimeout(() => {
        done()
      }, 200)
    },
    click(e) {
      if (this.item.click) {
        this.item.click(this.item, this.getIndex, e)
      }
    }
  }
}
</script>
