<template>
  <div class="app-wrapper">
    <app-header class="app-header">header</app-header>
    <div class="app-container">
      <sidebar class="sidebar-container" />
      <div class="app-main"><app-main /></div>
    </div>
  </div>
</template>

<script>
import "./layout.scss";
import { AppHeader, Sidebar, AppMain } from "./components";
export default {
  name: "Home",
  components: {
    Sidebar,
    AppHeader,
    AppMain,
  },
  created() {
  },
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
  z-index: 1500;
}
</style>
