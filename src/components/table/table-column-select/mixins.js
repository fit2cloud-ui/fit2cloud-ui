import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  mixins: [Locale, ConfigSize],
  props: {
    icon: {
      type: String,
      default: "el-icon-s-grid"
    },
    trigger: {
      type: String,
      default: "hover",
      validator: value => ['click', 'hover'].includes(value)
    },
    columns: Array
  },
  computed: {
    selectable({columns}) {
      return columns.filter(c => !c.fix)
    },
    isFixAll() {
      return this.columns?.every(c => c.fix)
    },
    hasSelect() {
      return this.columns?.length > 0 && !this.isFixAll
    }
  }
};
