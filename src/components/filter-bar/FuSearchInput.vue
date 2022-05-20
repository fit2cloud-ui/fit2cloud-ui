<template>
  <el-input class="fu-search-input" prefix-icon="el-icon-search" v-model="quick"
            :size="configSize" @input="input" @blur="blur" @keydown="keydown" v-bind="$attrs" clearable/>
</template>

<script>
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuSearchInput",
  mixins: [ConfigSize],
  props: {
    value: String,
  },
  data() {
    return {
      quick: ""
    }
  },
  watch: {
    value(v) {
      this.quick = v
    }
  },
  methods: {
    input(e) {
      this.$emit("input", this.quick, e)
    },
    blur(e) {
      this.$emit("change", this.quick, e)
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("change", this.quick, e)
      }
    },
  }
}
</script>
