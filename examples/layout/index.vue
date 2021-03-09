<template>
  <div class="app-wrapper">
    <div class="app-header">
      <app-header>header</app-header>
    </div>
    <div class="app-container">
      <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
        <div class="app-main">
          <sidebar class="sidebar-container" />
          <app-main />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import "./layout.scss";
import { AppHeader, AppMain, Sidebar } from "./components";

export default {
  name: "Home",
  components: {
    Sidebar,
    AppHeader,
    AppMain,
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
}
.app-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #0e355d;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 1500;
}
.app-container {
  height: 100%;
  padding: 0;
}
.app-main {
  width: 1140px;
  margin: 0 auto;
}
</style>
