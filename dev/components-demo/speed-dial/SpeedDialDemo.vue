<template>
  <div>
    <div>Speed Dial</div>
    <ul>
      <li>props说明 TODO</li>
      <li>事件说明 TODO</li>
    </ul>
    <fu-speed-dial bottom="50%" right="70%" size="big" :movable="true">
      <fu-speed-dial-item :index="0" :item="{title: 'No.0', click: clickItem}"/>
      <fu-speed-dial-item :index="1">
        <el-button type="primary" circle icon="el-icon-plus" @click="clickItem('No.1', 1, $event)"></el-button>
      </fu-speed-dial-item>
      <fu-speed-dial-item :index="2">
        <!-- 自定义 title class-->
        <fu-speed-dial-action-button :index="2" title="No.2" title-class="custom-fu-speed-dial-item-title"
                                    @click="clickItem('No.2',2, $event)"/>
      </fu-speed-dial-item>
    </fu-speed-dial>

    <fu-speed-dial bottom="50%" right="50%" :items="items" direction="right" @click="click" :click-close="false"/>

    <fu-speed-dial bottom="50%" right="30%" size="medium" direction="bottom" :outside-close="false">
      <!-- 自定义 fab内容-->
      <fu-speed-dial-item v-for="(item, index) in items" :index="index" :key="index">
        <!-- 自定义 fab-item内容-->
        <fu-speed-dial-action-button :index="index" v-bind="item" @click="clickItem(item, index, $event)">
          <!-- 自定义 fu-speed-dial-item-button内容，v-slot:title为标题内容-->
          <template v-slot:title>
            <span class="custom-fu-speed-dial-item-title">title: {{ item.title }}</span>
          </template>
          <!-- 自定义 fu-speed-dial-item-button内容，v-slot:default为按钮内容-->
        </fu-speed-dial-action-button>
      </fu-speed-dial-item>
    </fu-speed-dial>

    <fu-speed-dial bottom="50%" right="10%" :items="noTitleItems" size="small" direction="left" :manual="true"
                   ref="fab"/>
    <el-button size="small" class="fab-demo-manual" @click="toggle">
      <span v-if="active">关闭</span>
      <span v-else>打开</span>
    </el-button>
  </div>
</template>

<script>
import FuSpeedDial from "@/components/speed-dial/FuSpeedDial";
import FuSpeedDialItem from "@/components/speed-dial/FuSpeedDialItem";
import FuSpeedDialActionButton from "@/components/speed-dial/FuSpeedDialActionButton";

export default {
  name: "SpeedDialDemo",
  components: {FuSpeedDialActionButton, FuSpeedDialItem, FuSpeedDial},
  data() {
    return {
      active: false,
      items: [
        {
          title: 1,
          bgColor: "#67c23a",
          color: "#FFF",
          titleBgColor: "#F1F1F1",
          titleColor: "#67c23a",
          icon: "el-icon-edit",
          click: this.clickItem
        },
        {title: 10, click: this.clickItem},
        {title: 100, click: this.clickItem},
        {title: 999999, click: this.clickItem},
        {title: "外部接口导入", click: this.clickItem},
      ],
      noTitleItems: [
        {
          bgColor: "#67c23a",
          color: "#FFF",
          titleBgColor: "#F1F1F1",
          titleColor: "#67c23a",
          icon: "el-icon-edit",
          click: this.clickItem
        },
        {title: 10, click: this.clickItem},
        {title: 100, click: this.clickItem},
        {title: 999999, click: this.clickItem},
        {title: "外部接口导入", click: this.clickItem},
      ]
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      this.$refs.fab.toggle(this.active);
      // 或者
      // this.$refs.fab.toggle();
    },
    click: function (active, e) { // FAB点击事件
      console.log(active, e)
    },
    clickItem(item, index, e) { // FAB Item点击事件
      console.log(item, index, e)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .custom-fu-speed-dial-item-title {
  font-style: italic;
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
  padding: 5px 10px;
  line-height: 1;
  box-sizing: border-box;
  border-radius: 4px
}

.fab-demo-manual {
  position: fixed;
  right: 10%;
  bottom: 60%;
}
</style>
