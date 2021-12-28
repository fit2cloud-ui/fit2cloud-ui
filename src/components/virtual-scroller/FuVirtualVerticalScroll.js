import measurable from "@/mixins/measurable";
import {convertToUnit} from "@/tools/utils"

export default {
  name: 'FuVirtualVerticalScroll',
  mixins: [measurable],
  props: {
    items: {
      type: Array,
      required: true
    },
    itemHeight: {
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
      scrollTop: 0,
      first: 0,
      last: 0,
    }
  },
  watch: {
    height: 'scroll',
    itemHeight: 'scroll',
  },
  computed: {
    intItemHeight() {
      return parseInt(this.itemHeight, 10)
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
    containerHeight({items, intItemHeight}) {
      return items.length * intItemHeight
    }
  },
  methods: {
    createChild(item, index) {
      index += this.firstToRender
      const top = convertToUnit(index * this.intItemHeight)

      let data = {
        staticClass: 'fu-virtual-scroll__item',
        style: {top},
        key: index,
      }
      let children = this.$scopedSlots["default"]({index, item})

      return this.$createElement('div', data, children)
    },
    getFirst() {
      return Math.floor(this.scrollTop / this.intItemHeight)
    },
    getLast() {
      const height = parseInt(this.height || 0, 10) || this.$el.clientHeight
      return this.first + Math.ceil(height / this.intItemHeight)
    },
    scroll() {
      this.scrollTop = this.$el.scrollTop
      this.first = this.getFirst()
      this.last = this.getLast()
    }
  },
  render(h) {
    const children = this.items.slice(this.firstToRender, this.lastToRender,).map(this.createChild)

    const content = h('div', {
      staticClass: 'fu-virtual-scroll__container',
      style: {
        height: convertToUnit(this.containerHeight),
      },
    }, children)

    return h('div', {
      staticClass: 'fu-virtual-scroll',
      style: this.styles,
      on: {scroll: this.scroll, ...this.$listeners},
    }, [content])
  },
  mounted() {
    this.last = this.getLast()
  },
}
