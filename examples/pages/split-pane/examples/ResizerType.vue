<template>
  <div>
    <el-divider content-position="left">线状分割</el-divider>
    <div class="demo-split">
      <fu-split-pane left="200px" resizer-type="line" :resizable="false">
        <template v-slot:left>
          Left
        </template>
        <template v-slot:right>
          Right
        </template>
      </fu-split-pane>
    </div>
    <el-divider content-position="left">定义分割线样式</el-divider>
    <div class="demo-split">
      <fu-split-pane left="200px" resizer-type="line" :resizable="false"
        :resizer-style="{background:'none'}">
        <template v-slot:left>
          <div class="demo-split-child">
            <fu-split-pane top="50%" direction="vertical" resizer-type="line"
              :resizer-style="{background:'none'}">
              <template v-slot:top>
                <div class="pane" style="background: #f9e29a;">
                  Top
                </div>
              </template>
              <template v-slot:bottom>
                <div class="pane" style="background: #a8dfd3;">
                  Bottom
                </div>
              </template>
            </fu-split-pane>
          </div>
        </template>
        <template v-slot:right>
          <div class="pane" style="background: #fbbbbb;">
            Right
          </div>
        </template>
      </fu-split-pane>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResizerType",
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
  .pane {
    height: 100%;
  }
}
.demo-split-child {
  height: 200px;
}
</style>
