<template>
  <div class="demo-layout">
    <div class="header">FIT2CLOUD UI 组件示例</div>
    <div class="sidebar">
      <menus/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menus from "./Menus";

export default {
  name: "DemoLayout",
  components: {Menus}
}
</script>

<style scoped>
.demo-layout {
  background-color: #E6EBF5;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
}

.sidebar {
  position: fixed;
  top: 61px;
  bottom: 0;
  width: 330px;
  overflow-y: auto;
  border-right: 1px solid #e6e6e6;
}

.content {
  position: fixed;
  top: 61px;
  left: 331px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 20px;
}
</style>
