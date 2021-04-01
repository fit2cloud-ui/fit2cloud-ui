<template>
  <el-button class="fu-step-button" :size="size" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "FuStepButton",
  props: {
    size: {
      type: String,
      default: "medium",
    },
  },
};
</script>
