<template>
  <div class="fu-quick-search">
    <i class="el-icon-search" v-if="useIcon"/>
    <label>
      <input :placeholder="placeholder" v-model="quick" @input="input" @blur="blur" @keydown="keydown"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "FuQuickSearch",
  props: {
    value: String,
    placeholder: String,
    useCleanButton: Boolean,
    useIcon: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: function (v) {
      this.quick = v
    }
  },
  data() {
    return {
      quick: ""
    }
  },
  methods: {
    input() {
      this.$emit("input", this.quick)
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
