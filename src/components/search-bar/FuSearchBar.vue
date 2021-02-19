<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-quick-search :placeholder="quickPlaceholder" @change="quickChange" v-if="showQuickSearch"/>
      <fu-complex-search :components="components" @change="change" v-if="showComplexSearch"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <fu-search-bar-button icon="el-icon-refresh" @click="exec" :tooltip="t('fu.search_bar.refresh')"/>
        <slot></slot>
      </slot>
    </div>
  </div>
</template>

<script>
import FuQuickSearch from "./FuQuickSearch";
import FuComplexSearch from "./FuComplexSearch";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import Locale from "@/mixins/locale";

export default {
  name: "FuSearchBar",
  components: {FuSearchBarButton, FuComplexSearch, FuQuickSearch},
  mixins: [Locale],
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
      default: false
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
      this.exec(e)
    },
    change(conditions) {
      if (!this.combine) {
        this.quick = undefined;
      }
      this.conditions = conditions
      this.exec()
    },
    exec(e) {
      this.$emit("exec", this.condition, e)
    }
  },
  computed: {
    showQuickSearch() {
      return this.useQuickSearch && (this.combine || this.conditions.length === 0)
    },
    showComplexSearch() {
      return this.useComplexSearch && this.components && this.components.length > 0
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
