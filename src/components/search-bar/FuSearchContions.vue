<template>
  <div class="fu-search-conditions">
    <div class="fu-search-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div>{{ condition.label }}</div>
      <div>{{ condition.operatorLabel }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <i class="el-icon-close condition-remove" @click="remove(index)"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "FuSearchConditions",
  props: {
    conditions: Array
  },
  methods: {
    remove(index) {
      this.conditions.splice(index, 1)
    }
  }
}
</script>
