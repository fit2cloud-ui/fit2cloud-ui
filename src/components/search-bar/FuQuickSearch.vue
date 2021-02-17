<template>
  <div class="fu-quick-search">
    <i class="el-icon-search"/>
    <label>
      <input :placeholder="placeholder" v-model="value" @blur="blur" @keydown="keydown"/>
    </label>
    <i class="el-icon-close clear-button" @mousedown.prevent="clear" v-if="value"/>
  </div>
</template>

<script>
export default {
  name: "FuQuickSearch",
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    blur() {
      this.$emit("change", this.value)
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("change", this.value)
      }
    },
    clear(e) {
      // 用mousedown代替click事件，避免触发blur
      if (e.button === 0) {
        this.value = ""
        this.$emit("change", this.value)
      }
    }
  }
}
</script>
