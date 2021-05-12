<template>
  <div>
    <el-divider content-position="left">水平分割</el-divider>
    <div class="demo-split">
      <fu-split-pane left="200px">
        <div slot="left">
          Left
        </div>
        <div slot="right">
          Right
        </div>
      </fu-split-pane>
    </div>
    <el-divider content-position="left">垂直分割</el-divider>
    <div class="demo-split">
      <fu-split-pane top="40%" direction="vertical">
        <div slot="top">
          Top
        </div>
        <div slot="bottom">
          Bottom
        </div>
      </fu-split-pane>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSplit",
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
