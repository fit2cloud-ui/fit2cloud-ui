<template>
  <div class="fu-filter-conditions">
    <div class="fu-filter-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div class="condition-text">{{ text(condition) }}</div>
      <i class="el-icon-close fu-filter-conditions__remove" @click="remove(index)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "FuFilterConditions",
  props: {
    conditions: Array
  },
  methods: {
    remove(index) {
      this.conditions.splice(index, 1)
      this.$emit("change", this.conditions)
    },
    text(condition) {
      return condition.label + " " + condition.valueLabel || condition.value
    }
  }
}
</script>
