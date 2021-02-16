<template>
  <div class="fu-complex-search">
    <div class="fu-complex-search__condition" v-for="(condition, field) in conditions" :key="field">
      <div>{{ condition.label }}</div>
      <div>{{ condition.operatorLabel }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <i class="el-icon-close condition-remove" @click="remove(condition.field)"/>
    </div>

    <div class="fu-complex-search__components">
      <fu-complex-components :components="components" @submit="submit" v-if="components.length > 0"/>
    </div>

    <div class="fu-complex-search__buttons">
      <el-button icon="el-icon-close clean-condition"
                 size="medium"
                 circle
                 @click="clean"
                 v-if="conditions.length > 0"/>
    </div>
  </div>
</template>

<script>
import FuComplexComponents from "@/components/search-bar/complex-components/FuComplexComponents";

export default {
  name: "FuComplexSearch",
  components: {FuComplexComponents},
  props: {
    components: Array
  },
  data() {
    return {
      conditionMap: new Map(),
      conditions: []
    }
  },
  methods: {
    updateConditions() {
      this.conditions = []
      this.conditionMap.forEach(condition => {
        this.conditions.push(condition)
      })
    },
    submit(conditionMap) {
      conditionMap.forEach((condition, field) => {
        this.conditionMap.set(field, condition)
      })
      this.updateConditions()
      this.$emit("change", this.conditionMap)
    },
    remove(field) {
      this.conditionMap.delete(field)
      this.updateConditions()
      this.$emit("change", this.conditionMap)
    },
    clean() {
      this.conditionMap.clear()
      this.updateConditions()
    }
  }
}
</script>
