<script>
import {uuid} from "@/tools/utils"

const TRIGGERS = ['manual', 'click', 'dblclick']

export default {
  name: "FuReadWriteSwitch",
  props: {
    value: Boolean,
    data: [String, Number, Boolean],
    writeTrigger: {
      type: String,
      default: "click",
      validator: value => {
        return TRIGGERS.includes(value)
      }
    }
  },
  watch: {
    value(v) {
      if (v === this.write) return

      if (v) {
        this.switchWrite()
      } else {
        this.switchRead()
      }
    }
  },
  data() {
    return {
      id: uuid(),
      write: this.value === undefined ? false : this.value
    }
  },
  methods: {
    change() {
      const {data, write} = this
      this.$emit("input", write)
      this.$emit("change", {data, write})
    },
    switchWrite() {
      this.write = true

      this.$nextTick(() => {
        // 目前只支持input和textarea自动获取焦点
        const id = document.getElementById(this.id)
        const input = id?.querySelector("input")
        input?.click() // el-select等组件自动展开
        input?.focus()
        const textarea = id?.querySelector("textarea")
        textarea?.focus()

        // 可以在change事件自定义获取焦点
        this.change()
      })
    },
    switchRead() {
      this.write = false
      this.change()
    }
  },
  render(h) {
    const {data, write, $scopedSlots} = this

    const context = {
      class: "fu-read-write-switch",
      attrs: {id: this.id},
      on: {}
    }

    // 读状态添加触发写状态的事件
    if (!write && this.writeTrigger !== TRIGGERS[0]) {
      context.on[this.writeTrigger] = this.switchWrite
    }

    // 没有slot时显示文本数据
    let children = data

    // 读状态内容，提供切换到写状态的方法
    if (!write && $scopedSlots.read) {
      children = $scopedSlots.read({
        write: this.switchWrite
      })
    }

    // 写状态内容，提供切换到读状态的方法
    if (write && $scopedSlots.default) {
      children = $scopedSlots.default({
        read: this.switchRead
      })
    }

    return h("div", context, children)
  }
}
</script>
