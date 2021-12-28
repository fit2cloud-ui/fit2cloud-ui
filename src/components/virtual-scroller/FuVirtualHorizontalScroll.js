import measurable from "@/mixins/measurable";
import {convertToUnit} from "@/tools/utils"

export default {
  name: 'FuVirtualHorizontalScroll',
  mixins: [measurable],
  props: {
    items: {
      type: Array,
      required: true
    },
    itemWidth: {
      type: [Number, String],
      required: true
    },
    buffer: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      scrollLeft: 0,
      first: 0,
      last: 0,
    }
  },
  watch: {
    width: 'scroll',
    itemWidth: 'scroll',
  },
  computed: {
    intItemWidth() {
      return parseInt(this.itemWidth, 10)
    },
    intBuffer() {
      return parseInt(this.buffer, 10)
    },
    firstToRender({first, intBuffer}) {
      return Math.max(0, first - intBuffer)
    },
    lastToRender({items, last, intBuffer}) {
      return Math.min(items.length, last + intBuffer)
    },
    containerWidth({items, intItemWidth}) {
      return items.length * intItemWidth
    }
  },
  methods: {
    createChild(item, index) {
      index += this.firstToRender
      const left = convertToUnit(index * this.intItemWidth)

      let data = {
        staticClass: 'fu-virtual-scroll__item',
        style: {left},
        key: index,
      }
      let children = this.$scopedSlots["default"]({index, item})

      return this.$createElement('div', data, children)
    },
    getFirst() {
      return Math.floor(this.scrollLeft / this.intItemWidth)
    },
    getLast() {
      const width = parseInt(this.width || 0, 10) || this.$el.clientWidth
      return this.first + Math.ceil(width / this.intItemWidth)
    },
    scroll() {
      this.scrollLeft = this.$el.scrollLeft
      this.first = this.getFirst()
      this.last = this.getLast()
    }
  },
  render(h) {
    const children = this.items.slice(this.firstToRender, this.lastToRender,).map(this.createChild)

    const content = h('div', {
      staticClass: 'fu-virtual-scroll__container',
      style: {
        height: this.height || "100%",
        width: convertToUnit(this.containerWidth),
      },
    }, children)

    return h('div', {
      staticClass: 'fu-virtual-scroll is-horizontal',
      style: this.styles,
      on: {scroll: this.scroll, ...this.$listeners},
    }, [content])
  },
  mounted() {
    this.last = this.getLast()
  },
}
