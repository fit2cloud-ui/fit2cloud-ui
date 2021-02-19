<template>
  <el-popover trigger="click" :visible-arrow="false" class="fu-column-select">
    <div v-for="(c, i) in columns" :key="i">
      <el-checkbox v-model="c.show" :checked="c.show !== false">
        {{ c.label }}
      </el-checkbox>
    </div>
    <fu-search-bar-button slot="reference" icon="el-icon-more"/>
  </el-popover>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";

export default {
  name: "FuColumnSelect",
  components: {FuSearchBarButton},
  props: {
    columns: Array
  }
}
</script>
