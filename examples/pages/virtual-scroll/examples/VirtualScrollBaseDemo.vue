<template>
  <fu-virtual-scroll height="200" item-height="20" :items="items">
    <template v-slot="{index, item}">
      index: {{ index }}, item: {{ item }}
    </template>
  </fu-virtual-scroll>
</template>

<script>
export default {
  name: "VirtualScrollBaseDemo",
  data() {
    return {
      items: []
    }
  },
  mounted() {
    for (let i = 1; i < 10001; i++) {
      this.items.push("项目" + i)
    }
  }
}
</script>
