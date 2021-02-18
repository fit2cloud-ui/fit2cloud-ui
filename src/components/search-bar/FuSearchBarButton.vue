<template>
  <el-button class="fu-search-bar-button" :type="type" circle size="medium" @click="click">
    <slot>
      <i :class="icon"/>
    </slot>
  </el-button>
</template>

<script>
export default {
  name: "FuSearchBarButton",
  props: {
    icon: String,
    type: String
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
