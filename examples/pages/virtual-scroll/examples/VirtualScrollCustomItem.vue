<template>
  <fu-virtual-scroll height="200" item-height="40" :items="items">
    <template v-slot="{item}">
      <div style="cursor: pointer" @click="click(item)">
        <el-tag :type="types[item % 5]">标签 {{ item }}</el-tag>
      </div>
    </template>
  </fu-virtual-scroll>
</template>

<script>
export default {
  name: "VirtualScrollCustomItem",
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
