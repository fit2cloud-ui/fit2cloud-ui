<template>
  <div class="speed-dial-demo">
    <div>
      <h4>默认设置</h4>
      <fu-speed-dial :items="items"/>
    </div>

    <div>
      <h4>item点击后不关闭</h4>
      <fu-speed-dial direction="left" :items="items" :item-click-close="false"/>
    </div>

    <div>
      <h4>点击空白处不关闭</h4>
      <fu-speed-dial :items="items" :outside-close="false"/>
    </div>

    <div>
      <h4>
        手动开关
        <el-button size="small" class="fab-demo-manual" @click="toggle">
          <span v-if="active">关闭</span>
          <span v-else>打开</span>
        </el-button>
      </h4>

      <fu-speed-dial :items="items" :manual="true" v-model="active"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpeedDialTrigger",
  data() {
    return {
      active: false,
      items: [
        {title: "Item 1"},
        {title: "Item 2"},
        {title: "Item 3"},
        {title: "Item 4"},
        {title: "Item 5"},
      ]
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  }
}
</script>

<style lang="scss" scoped>
.speed-dial-demo {
  display: flex;
  align-items: center;

  > div {
    width: 25%;
  }
}
</style>
