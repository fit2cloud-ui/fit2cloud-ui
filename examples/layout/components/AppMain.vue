<template>
  <div class="main-wrapper">
    <h1>{{nowComponent.name}}</h1>
    <component :is='nowComponent.component'/>
    
  </div>
</template>
<script>
import {getComponent} from "../../utils/nav";

export default {
  name: "AppMain",
  data() {
    return {
      nowComponent: null,
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
  h1{
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
