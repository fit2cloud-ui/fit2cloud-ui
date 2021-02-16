<template>
  <div class="fu-search-bar">
    <div class="fu-search-bar__content">
      <fu-quick-search :placeholder="quickPlaceholder" @exec="exec" v-if="showQuickSearch"/>
      <fu-complex-search :components="components" @change="change" v-if="useComplexSearch"/>
    </div>
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <el-button circle icon="el-icon-more" size="medium"></el-button>
        <el-button circle icon="el-icon-refresh" size="medium"></el-button>
      </slot>
    </div>
  </div>
</template>

<script>
import FuQuickSearch from "./FuQuickSearch";
import FuComplexSearch from "./FuComplexSearch";

export default {
  name: "FuSearchBar",
  components: {FuComplexSearch, FuQuickSearch},
  props: {
    quickPlaceholder: String,
    components: Array,
    useQuickSearch: {
      type: Boolean,
      default: true
    },
    useComplexSearch: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      conditionMap: {},
    }
  },
  methods: {
    change(conditionMap) {
      this.conditionMap = conditionMap;
    },
    exec(value) {
      console.log(value)
    }
  },
  computed: {
    showQuickSearch() {
      return this.useQuickSearch && this.conditionMap.size === 0;
    },
  }
}
</script>
