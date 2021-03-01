import Locale from "@/mixins/locale";

export default {
  mixins: [Locale],
  props: {
    size: String,
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
  methods: {
    show(labelOrIndex) {
      if (typeof labelOrIndex === "string") {
        this.columns.find(c => c.label === labelOrIndex).forEach(c => c.show = true)
      } else {
        this.columns[labelOrIndex].show = true;
      }
    },
    hide(labelOrIndex) {
      if (typeof labelOrIndex === "string") {
        this.columns.find(c => c.label === labelOrIndex).forEach(c => c.show = false)
      } else {
        this.columns[labelOrIndex].show = false;
      }
    },
    showAll() {
      this.columns.forEach(c => c.show = true)
    },
    hideAll() {
      this.columns.forEach(c => c.show = false)
    }
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
