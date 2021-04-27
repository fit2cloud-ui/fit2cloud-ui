<template>
  <el-tooltip :content="label" :disabled="!label">
    <el-button circle :size="size" v-on="$listeners" v-bind="$attrs" :disabled="disabled">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>
<script>
export default {
  name: "FuTableButton",
  props: {
    size: {
      type: String,
      default: "mini"
    },
    label: String,
    disabled: Boolean
  },
}
</script>
