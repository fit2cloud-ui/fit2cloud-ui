<template>
  <fu-read-write-switch :write-trigger="writeTrigger" :data="data">
    <template #read>
      <slot name="read">
        {{ data }}
      </slot>
    </template>
    <template v-slot:default="{read}">
      <el-select v-model="data" v-bind="$attrs" @input="input" @blur="blur(read, $event)"
                 @change="change(read, $event)">
        <slot>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </slot>
      </el-select>
    </template>
  </fu-read-write-switch>
</template>

<script>
export default {
  name: "FuSelectRwSwitch",
  props: {
    value: [String, Number],
    options: Array,
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
      setTimeout(() => {
        read()
      }, 100)
      this.$emit("blur", this.data, e)
    },
    change(read, e) {
      this.$emit("change", this.data, e)
      read()
    }
  }
}
</script>
