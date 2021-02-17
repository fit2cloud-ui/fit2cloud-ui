<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-quick-search :placeholder="quickPlaceholder" @change="quickChange" v-if="showQuickSearch"/>
      <fu-complex-search :components="components" @change="change" v-if="useComplexSearch"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <el-button circle icon="el-icon-more" size="medium"/>
        <el-button circle icon="el-icon-refresh" size="medium"/>
      </slot>
    </div>
  </div>
</template>

<script>
import FuQuickSearch from "./FuQuickSearch";
import FuComplexSearch from "./FuComplexSearch";

export default {
  name: "FuSearchBar",
  components: {FuComplexSearch, FuQuickSearch},
  props: {
    quickPlaceholder: String,
    components: Array,
    useQuickSearch: { // 是否使用快速查询
      type: Boolean,
      default: true
    },
    useComplexSearch: { // 是否使用高级查询
      type: Boolean,
      default: true
    },
    combine: { // 是否同时使用快速查询和高级查询
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      quick: "",
      conditions: [],
    }
  },
  methods: {
    quickChange(value, e) {
      this.quick = value
      this.$emit("exec", this.condition, e)
    },
    change(conditions) {
      if (!this.combine) {
        this.quick = undefined;
      }
      this.conditions = conditions
      this.$emit("exec", this.condition)
    }
  },
  computed: {
    showQuickSearch() {
      return this.useQuickSearch && (this.combine || this.conditions.length === 0)
    },
    condition() {
      const condition = {}
      const {quick, conditions} = this

      if (quick) {
        condition.quick = quick
      }

      if (conditions.length > 0) {
        const complex = {}
        conditions.forEach(c => {
          const {field, operator, value} = c
          complex[c.field] = {field, operator, value}
        })
        condition.complex = complex;
      }

      return condition
    }
  }
}
</script>