<template>
  <div>
    <div class="demo-split">
      <fu-split-pane left="200" direction="horizontal" :resizer-style="{width:'10px'}">
        <template v-slot:left>
          <div style="padding-right:5px">
            Left
          </div>
        </template>
        <template v-slot:resizer>
          <i class="el-icon-d-caret"></i>
        </template>
        <template v-slot:right>
          <div style="padding-left:5px">
            Right
          </div>
        </template>
      </fu-split-pane>
    </div>
    <el-divider></el-divider>
    <div class="demo-split">
      <fu-split-pane top="50%" direction="vertical" :resizer-style="{height:'10px'}">
        <template v-slot:top>
          Top
        </template>
        <template v-slot:resizer>
          <i class="el-icon-d-caret"></i>
        </template>
        <template v-slot:bottom>
          <div style="padding-top:5px">
            Bottom
          </div>
        </template>
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
