<template>
  <div :class="['fu-quick-search', 'fu-quick-search--' + configSize]">
    <i class="el-icon-search" v-if="useIcon"/>
    <label>
      <input :placeholder="placeholder" v-model="quick" @input="input" @blur="blur" @keydown="keydown"/>
    </label>
  </div>
</template>

<script>
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuQuickSearch",
  mixins: [ConfigSize],
  props: {
    value: String,
    placeholder: String,
    useIcon: {
      type: Boolean,
      default: true
    }
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
    }
  }
}
</script>
