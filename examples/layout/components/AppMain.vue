<template>
  <div class="main-wrapper">
    <component :is='nowComponent' />
    
  </div>
</template>
<script>
import {getComponent} from "../../utils/nav";

export default {
  name: "AppMain",
  data() {
    return {
      nowComponent: "",
      showPath: "complex-table",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newValue, oldValue) {
        this.nowComponent=getComponent(newValue.params.comName,newValue.params.type)
      },
    },
  },
  methods: {
    getComponent,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 90%;
}
</style>
