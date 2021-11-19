<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-complex-search ref="complex" :components="components" @change="change" :size="configSize" v-if="showComplex" @close="closePopover">
        <slot name="complex"></slot>
      </fu-complex-search>
      <fu-search-conditions :conditions="conditions" :size="configSize" @change="change" v-if="showComplex"/>
      <fu-quick-search :size="configSize" :use-icon="!showComplex" :placeholder="placeholder" v-model="quick"
                       @change="quickChange" v-if="useQuickSearch"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <fu-search-bar-button icon="el-icon-close" @click="clean" :size="configSize" :tooltip="t('fu.search_bar.clean')"
                              v-if="showClean"/>
        <fu-search-bar-button icon="el-icon-refresh" @click="refresh" :size="configSize"
                              :tooltip="t('fu.search_bar.refresh')"
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
import ConfigSize from "@/mixins/config-size";
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
  mixins: [Locale, ConfigSize],
  props: {
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
      default: false
    },
    useQuickSearch: { // 是否使用快速搜索
      type: Boolean,
      default: true
    },
    components: Array,
  },
  data() {
    return {
      quick: "",
      conditions: [],
    }
  },
  methods: {
    closePopover() {
      this.$emit("close")
    },
    setConditions(conditions) {
      this.conditions = this.$refs.complex.createConditions(conditions)

      if (this.useQuickSearch && conditions[this.quickKey] !== undefined) {
        this.quick = conditions[this.quickKey].value
        this.quickChange(this.quick)
      } else {
        this.refresh()
      }
    },
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
    clean() {
      this.quick = ""
      this.conditions = []
      this.$emit("exec", this.condition)
    },
    refresh() {
      this.$refs.complex.close()
      this.exec()
    },
    exec() {
      // 只有快速搜索
      if (!this.showComplex) {
        this.$emit("exec", this.quick)
        return
      }
      this.$emit("exec", this.condition)
    }
  },
  computed: {
    placeholder() {
      return this.quickPlaceholder ? this.quickPlaceholder : this.t('fu.search_bar.search')
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
