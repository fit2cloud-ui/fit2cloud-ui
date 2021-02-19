<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button class="fu-search-bar-button" :type="type" circle size="medium" @click="click">
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
