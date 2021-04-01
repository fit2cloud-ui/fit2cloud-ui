<template>
  <fu-read-write-switch :write-trigger="writeTrigger" :data="data">
    <template v-slot:default="{read}">
      <el-input v-model="data" v-bind="$attrs" @input="input" @blur="blur(read, $event)"
                @keydown.native="keydown(read, $event)"/>
    </template>
  </fu-read-write-switch>
</template>

<script>
export default {
  name: "FuInputRwSwitch",
  props: {
    value: [String, Number],
    writeTrigger: {
      type: String,
      default: "click",
      validator: value => {
        return ['click', 'dblclick'].includes(value)
      }
    }
  },
  data() {
    return {
      data: this.value
    }
  },
  watch: {
    value(v) {
      this.data = v
    }
  },
  methods: {
    input(e) {
      this.$emit("input", this.data, e)
    },
    blur(read, e) {
      this.$emit("blur", this.data, e)
      read()
    },
    keydown(read, e) {
      if (e.keyCode === 13) {
        read()
      }
    }
  }
}
</script>
