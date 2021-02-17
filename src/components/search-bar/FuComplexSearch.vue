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

function merge(source, target) {
  let conditions = source.concat(target)
  let conditionMap = new Map()

  for (let condition of conditions) {
    if (!conditionMap.has(condition.field)) {
      conditionMap.set(condition.field, condition)
    }
  }
  let result = [];
  conditionMap.forEach(c => {
    result.push(c)
  })

  return result
}

export default {
  name: "FuComplexSearch",
  components: {FuComplexComponents},
  props: {
    components: Array
  },
  data() {
    return {
      conditions: []
    }
  },
  methods: {
    submit(conditions) {
      this.conditions = merge(this.conditions, conditions)
      this.$emit("change", this.conditions)
    },
    remove(index) {
      this.conditions.splice(index, 1)
      this.$emit("change", this.conditions)
    },
    clean() {
      this.conditions = [];
      this.$emit("change", this.conditions)
    }
  }
}
</script>
