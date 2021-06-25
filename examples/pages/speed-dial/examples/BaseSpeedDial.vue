<template>
  <div class="speed-dial-demo">
    <div>
      <fu-speed-dial id="left" size="big" direction="left" :items="items" @click="click"/>
    </div>

    <div>
      <fu-speed-dial id="top" :items="items" @click="click" type="success"
                     icon="el-icon-video-play" active-icon="el-icon-video-pause"/>
    </div>

    <div>
      <fu-speed-dial icon="iconfont icon-money" id="right" size="medium" direction="right" type="warning" :items="items" @click="click"/>
    </div>

    <div>
      <fu-speed-dial id="bottom" size="small" direction="bottom" type="danger" :items="items" @click="click"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSpeedDial",
  data() {
    return {
      items: [
        {title: "Item 1", click: this.clickItem},
        {title: "Item 2", click: this.clickItem},
        {title: "Item 3", click: this.clickItem, icon: "iconfont icon-huiyuan"},
        {title: "Item 4", click: this.clickItem},
        {title: "Item 5", click: this.clickItem},
      ]
    }
  },
  methods: {
    click(obj, e) {
      console.log(obj, e)
    },
    clickItem(item, e) {
      console.log(item, e)
    }
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
