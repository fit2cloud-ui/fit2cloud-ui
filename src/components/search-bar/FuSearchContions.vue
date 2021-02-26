<template>
  <div :class="['fu-search-conditions', 'fu-search-conditions--' + size]">
    <div class="fu-search-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div v-if="condition.label">{{ condition.label }}</div>
      <div v-if="condition.operatorLabel">{{ condition.operatorLabel }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <i class="el-icon-close condition-remove" @click="remove(index)"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "FuSearchConditions",
  props: {
    size: {
      type: String,
      default: "mini"
    },
    conditions: Array
  },
  methods: {
    remove(index) {
      this.conditions.splice(index, 1)
    }
  }
}
</script>
