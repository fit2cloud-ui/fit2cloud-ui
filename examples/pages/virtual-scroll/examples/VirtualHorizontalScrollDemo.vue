<template>
  <fu-virtual-scroll horizontal height="100" item-width="60" :items="items">
    <template v-slot="{item}">
      <p>{{ item }}</p>
    </template>
  </fu-virtual-scroll>
</template>

<script>
export default {
  name: "VirtualHorizontalScrollDemo",
  data() {
    return {
      items: [],
      types: ["", "success", "info", "warning", "danger"]
    }
  },
  methods: {
    click(item) {
      const types = ["", "success", "info", "warning", "error"]
      this.$message({
        message: '标签 ' + item,
        type: types[item % 5]
      });
    }
  },
  mounted() {
    for (let i = 1; i < 10001; i++) {
      this.items.push(i)
    }
  }
}
</script>

<style scoped>

</style>
