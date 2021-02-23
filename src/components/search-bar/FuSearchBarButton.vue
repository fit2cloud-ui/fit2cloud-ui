<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button circle class="fu-search-bar-button" :type="type" :size="size" @click="click">
      <slot>
        <i :class="icon"/>
      </slot>
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
    icon: String,
    type: String,
    tooltip: String
  },
  methods: {
    click(e) {
      this.$emit("click", e)
    }
  }
}
</script>

<style scoped>

</style>
