<template>
  <div class="speed-dial-demo">
    <div>
      拖拽:
      <el-radio-group v-model="movable">
        <el-radio :label="true">允许</el-radio>
        <el-radio :label="false">禁止</el-radio>
      </el-radio-group>
    </div>
    <div>
      position:
      <el-radio-group v-model="position">
        <el-radio label="absolute">absolute</el-radio>
        <el-radio label="fixed">fixed</el-radio>
      </el-radio-group>
    </div>

    <div class="speed-dial-move">
      <fu-speed-dial :position="position" bottom="calc(50% - 20px)" right="calc(50% - 20px)"
                     :movable="movable" :items="items" @click="click"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpeedDialPosition",
  data() {
    return {
      position: "absolute",
      movable: false,
      items: [
        {title: "Item 1", click: this.clickItem},
        {title: "Item 2", click: this.clickItem},
        {title: "Item 3", click: this.clickItem},
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
  },
}
</script>

<style lang="scss" scoped>
.speed-dial-demo {
  width: 100%;

  .speed-dial-move {
    margin-top: 10px;
    border: 1px #7c7c7c dashed;
    position: relative;
    width: 100%;
    height: 100px;
  }
}


</style>
