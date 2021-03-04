<template>
  <el-scrollbar>
    <div class="sidebar"
         v-for="(value, key, index) in navList"
         :key="index">
      <h1>{{ getTypeName(key) }}</h1>
      <ul v-for="(item, i) in value"
          :key="i">
        <li :class="{ active: showPath === item.path }"
            @click="isPath(item.path, key)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </el-scrollbar>
</template>

<script>
import { getTypeName, navList } from "../../utils/nav";

export default {
  name: "Sidebar",
  data () {
    return {
      navList,
      showPath: "complex-table",
    };
  },
  created () {
    this.showPath = this.$route.params.comName;
  },
  methods: {
    getTypeName,
    isPath (path, key) {
      this.showPath = path;
      this.$router.replace(`/${key}/${path}`);
    },
  },
};
</script>
<style lang="scss" scoped>
$themeColor: #2d61a2;
.sidebar {
  h1 {
    font-size: 16px;
    margin-top: 20px;
    padding-left: 10px;
  }
  ul {
    line-height: 35px;
    color: #666666;
    // margin-left:25px;
    li {
      cursor: pointer;
      padding: 5px 0;
      padding-left: 10px;
      &:hover {
        color: $themeColor;
      }
    }
    .active {
      background-color: #e6f7ff;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        border-left: 3px solid $themeColor;
      }
    }
  }
}
</style>
