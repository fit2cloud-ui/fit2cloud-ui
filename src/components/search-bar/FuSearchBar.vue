<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-complex-search :components="components" @change="change" :size="size" v-if="showComplex">
        <slot name="complex"></slot>
      </fu-complex-search>
      <fu-search-conditions :conditions="conditions" :size="size" @change="change" v-if="showComplex"/>
      <fu-quick-search :size="size" :use-icon="!showComplex" :placeholder="placeholder" v-model="quick"
                       @change="quickChange" v-if="showQuick"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <fu-search-bar-button icon="el-icon-close" @click="clean" :size="size" :tooltip="t('fu.search_bar.clean')"
                              v-if="showClean"/>
        <fu-search-bar-button icon="el-icon-refresh" @click="exec" :size="size" :tooltip="t('fu.search_bar.refresh')"
                              v-if="showRefresh"/>
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
    size: {
      type: String,
      default: "mini"
    },
    quickKey: {
      type: String,
      default: "quick"
    },
    quickPlaceholder: String,
    useCleanButton: { // 是否使用清除按钮
      type: Boolean,
      default: true
    },
    useRefreshButton: { // 是否使用刷新按钮
      type: Boolean,
      default: true
    },
    useQuickSearch: { // 是否使用快速查询
      type: Boolean,
      default: true
    },
    combine: { // 是否同时使用快速查询和高级查询
      type: Boolean,
      default: true
    },
    components: Array
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
        const field = this.quickKey
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
      // 只有快速搜索
      if (!this.showComplex) {
        this.$emit("exec", this.quick)
        return
      }
      this.$emit("exec", this.condition, e)
    },
    clean() {
      this.quick = ""
      this.conditions = []
      this.$emit("exec", this.condition)
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
      if (this.$slots?.complex) return true
      return this.components?.length > 0;
    },
    showClean() {
      return this.useCleanButton && this.showComplex && (this.conditions.length > 0 || this.quick)
    },
    showRefresh() {
      return this.useRefreshButton && this.showComplex
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
