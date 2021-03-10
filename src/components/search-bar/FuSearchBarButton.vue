<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button class="fu-search-bar-button" circle :size="size" v-on="$listeners" v-bind="$attrs">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>

<script>
export default {
  name: "FuSearchBarButton",
  props: {
    size: {
      type: String,
      default: "mini"
    },
    tooltip: String
  }
}
</script>
