<template>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="isActive">
      <slot>
        <fab-item-button :index="getIndex" v-bind="item" @click="click"/>
      </slot>
    </div>
  </transition>
</template>

<script>

import FabItemButton from "@/components/fab/FabItemButton";

export default {
  name: "FabItem",
  components: {FabItemButton},
  props: {
    index: {
      type: Number,
      required: true
    },
    item: Object,
  },
  inject: ["fab"],
  computed: {
    getIndex() {
      return this.item === undefined || this.item.index === undefined ? this.index : this.item.index;
    },
    isActive() {
      return this["fab"].active
    },
    size() {
      return this["fab"].size
    },
    direction() {
      return this["fab"].direction
    },
    spacing() {
      return this["fab"].config.item.spacing || 0;
    },
    directionPosition() {
      if (["top", "left"].includes(this.direction)) {
        return -this["fab"].config.fab.size - this.spacing
      }
      return this["fab"].config.fab.size + this.spacing
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
