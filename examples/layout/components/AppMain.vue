<template>
  <div class="main-wrapper">
    <h1>{{ nowComponent.name }}</h1>
    <component :is="nowComponent.component" class="page-container" />
  </div>
</template>
<script>
import { navList } from "../../utils/nav";
export default {
  name: "AppMain",
  data() {
    return {
      navList,
      nowComponent: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newValue, oldValue) {
        this.nowComponent = this.getComponent(
          newValue.params.comName,
          newValue.params.type
        );
      },
    },
  },
  methods: {
    getComponent(path, type) {
      let component;
      navList[type].map((item) => {
        if (path === item.path) {
          component = item;
        }
      });
      return component || navList["guide"][0];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  // width: 100%;
  h1 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
  }
  :v-deep.page-container {
    position: relative;
  }
}
</style>
