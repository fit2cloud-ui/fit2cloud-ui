import Locale from "@/mixins/locale";

export default {
  mixins: [Locale],
  props: {
    size: {
      type: String,
      default: "mini"
    },
    icon: {
      type: String,
      default: "el-icon-s-grid"
    },
    trigger: {
      type: String,
      default: "hover",
      validator: value => ['click', 'focus', 'hover', 'manual'].includes(value)
    },
    columns: Array
  },
  computed: {
    selectable({columns}) {
      return columns.filter(c => !c.fix)
    },
    isFixAll() {
      return this.columns.every(c => c.fix)
    }
  }
};
