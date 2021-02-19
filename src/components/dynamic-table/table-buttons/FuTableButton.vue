<template>
  <el-tooltip :content="label" :disabled="!label">
    <el-button v-on="$listeners" :type="type" :disabled="disabled" circle size="mini">
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
    label: String,
    icon: String,
    type: String,
    disabled: Boolean
  },
}
</script>
