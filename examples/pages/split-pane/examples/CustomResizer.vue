<template>
  <div>
    <div class="demo-split">
      <fu-split-pane left="200" direction="horizontal" :resizer-style="{width:'10px'}">
        <div slot="left" style="padding-right:5px">
          Left
        </div>
        <div slot="resizer">
          <i class="el-icon-d-caret"></i>
        </div>
        <div slot="right" style="padding-left:5px">
          Right
        </div>
      </fu-split-pane>
    </div>
    <el-divider></el-divider>
    <div class="demo-split">
      <fu-split-pane top="50%" direction="vertical" :resizer-style="{height:'10px'}">
        <div slot="top">
          Top
        </div>
        <div slot="resizer">
          <i class="el-icon-d-caret"></i>
        </div>
        <div slot="bottom" style="padding-top:5px">
          Bottom
        </div>
      </fu-split-pane>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomResizer",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
</style>
