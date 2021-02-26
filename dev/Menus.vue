<template>
  <div class="menus">
    <div class="menu-group" v-for="router in routers" :key="router.path">
      <div class="title">{{ router.meta.title }}</div>
      <div class="menu-item" v-for="sub in router.children" :key="sub.path">
        <el-link :underline="false" :href="getPath(router, sub)">{{ sub.meta.title }}</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import {Modules} from "./router";

export default {
  name: "Menus",
  components: {},
  data() {
    return {
      routers: Modules
    }
  },
  methods: {
    getPath(parent, current) {
      return "#" + parent.path + "/" + current.path;
    }
  }
}
</script>

<style scoped>
.menus {
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}

.menu-group {
  padding: 10px;
}

.menu-group .title {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
}

.menu-item {
  padding: 5px 20px;
  font-size: 14px;
}

.menu-item a {
  text-decoration: none;
}
</style>
