<template>
  <el-scrollbar>
    <div class="sidebar" v-for="(value, key, index) in navList" :key="index">
      <h1>{{ key }}</h1>
      <ul v-for="(item, i) in value" :key="i">
        <li
          :class="{ active: showPath === item.path }"
          @click="isPath(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </el-scrollbar>
</template>

<script>
import navList from "../../utils/nav";
export default {
  name: "Sidebar",
  data() {
    return {
      navList,
      showPath: "complex-table",
    };
  },
  created() {
    // this.clickLists(Number(this.$route.params.parentId), this.$route.query.parentName)
  },
  methods: {
    isPath(path) {
      this.showPath = path;
    },
    // clickLists (id, name) {
    //   this.hoverIndex = String(id)
    //   // this.$router.push(`/view360/${item.id}`)
    //   this.$store.commit('view360/SAVE_VIEWID', id)
    //   this.$emit('title', name)
    //   window.history.replaceState({}, '', `#/view360/${this.$route.params.personId}/${id}?parentName=${name}`)
    // },
    handleSelect(key, keyPath) {},
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  h1 {
    font-size: 16px;
    margin-top: 20px;
    padding-left: 30px;
  }
  ul {
    line-height: 35px;
    color: #2c3e50;
    // margin-left:25px;
    li {
      cursor: pointer;
      padding: 5px 0;
      padding-left: 30px;
      &:hover {
        color: #1890ff;
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
        border-right: 3px solid #1890ff;
      }
    }
  }
}
</style>
