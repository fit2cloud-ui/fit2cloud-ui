<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button class="fu-search-bar-button" circle :size="configSize" v-on="$listeners" v-bind="$attrs">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>

<script>
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuSearchBarButton",
  mixins: [ConfigSize],
  props: {
    tooltip: String
  }
}
</script>
