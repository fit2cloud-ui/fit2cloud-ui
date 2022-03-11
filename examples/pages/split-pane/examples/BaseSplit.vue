<template>
  <div>
    <el-divider content-position="left">水平分割</el-divider>
    <div class="demo-split">
      <fu-split-pane left="200px">
        <template v-slot:left>
          Left
        </template>
        <template v-slot:right>
          Right
        </template>
      </fu-split-pane>
    </div>
    <el-divider content-position="left">垂直分割</el-divider>
    <div class="demo-split">
      <fu-split-pane top="40%" direction="vertical">
        <template v-slot:top>
          Top
        </template>
        <template v-slot:bottom>
          Bottom
        </template>
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
