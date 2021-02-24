<template>
  <el-tooltip :content="label" :disabled="!label">
    <el-button circle v-on="$listeners" :type="type" :disabled="disabled" :size="size">
      <slot>
        <i :class="icon"/>
      </slot>
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
    icon: String,
    type: String,
    disabled: Boolean
  },
}
</script>
