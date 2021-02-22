<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-complex-search :components="components" @change="change" v-if="showComplex"/>
      <fu-search-conditions :conditions="conditions"/>
      <fu-quick-search :use-icon="false" :placeholder="placeholder" v-model="quick" @change="quickChange"
                       v-if="showQuick"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <fu-search-bar-button icon="el-icon-close" @click="clean" :tooltip="t('fu.search_bar.clean')"
                              v-if="showClean"/>
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
import FuSearchConditions from "@/components/search-bar/FuSearchContions";
import {ComplexCondition} from "@/components/search-bar/model";

// target覆盖source相同的field
function merge(source, target) {
  let conditions = source.concat(target)
  let conditionMap = new Map()

  for (let condition of conditions) {
    conditionMap.set(condition.field, condition)
  }
  let result = [];
  conditionMap.forEach(c => {
    result.push(c)
  })

  return result
}

export default {
  name: "FuSearchBar",
  components: {FuSearchConditions, FuSearchBarButton, FuComplexSearch, FuQuickSearch},
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
      if (value) {
        const field = "quick"
        const valueLabel = value
        this.conditions = merge(this.conditions, [new ComplexCondition({field, value, valueLabel})])
        this.exec(e)
        this.quick = "";
      }
    },
    change(conditions) {
      this.conditions = merge(this.conditions, conditions)
      this.exec()
    },
    exec(e) {
      this.$emit("exec", this.condition, e)
    },
    clean() {
      this.quick = ""
      this.conditions = []
    }
  },
  computed: {
    placeholder() {
      return this.quickPlaceholder ? this.quickPlaceholder : this.t('fu.search_bar.search')
    },
    showQuick() {
      return this.useQuickSearch && (this.combine || this.conditions.length === 0)
    },
    showComplex() {
      return this.useComplexSearch && this.components && this.components.length > 0
    },
    showClean() {
      return this.conditions.length > 0 || this.quick
    },
    condition() {
      const condition = {}
      const {conditions} = this

      if (conditions.length > 0) {
        conditions.forEach(c => {
          const {field, operator, value} = c
          condition[c.field] = {field, operator, value}
        })
      }

      return condition
    }
  }
}
</script>
