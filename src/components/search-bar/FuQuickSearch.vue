<template>
  <div class="fu-quick-search">
    <i class="el-icon-search"/>
    <label>
      <input :placeholder="placeholder" v-model="value" @blur="blur" @keydown="keydown"/>
    </label>
    <i class="el-icon-close clean-button" @mousedown.prevent="clear" v-if="showCleanButton"/>
  </div>
</template>

<script>
export default {
  name: "FuQuickSearch",
  props: {
    placeholder: String,
    useCleanButton: Boolean
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    blur(e) {
      this.$emit("change", this.value, e)
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("change", this.value, e)
      }
    },
    clear(e) {
      // 用mousedown代替click事件，避免触发blur
      if (e.button === 0) {
        this.value = ""
        this.$emit("change", this.value, e)
      }
    }
  },
  computed: {
    showCleanButton() {
      return this.useCleanButton && this.value
    }
  }
}
</script>
