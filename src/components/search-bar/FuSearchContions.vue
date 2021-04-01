<template>
  <div :class="['fu-search-conditions', 'fu-search-conditions--' + configSize]">
    <div class="fu-search-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div v-if="condition.label">{{ condition.label }}</div>
      <div v-if="condition.operatorLabel">{{ condition.operatorLabel }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <i class="el-icon-close condition-remove" @click="remove(index)"/>
    </div>
  </div>
</template>

<script>

import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuSearchConditions",
  mixins: [ConfigSize],
  props: {
    conditions: Array
  },
  methods: {
    remove(index) {
      this.conditions.splice(index, 1)
      this.$emit("change", this.conditions)
    }
  }
}
</script>
