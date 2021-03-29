<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" v-model="write" @change="change">
      <el-input v-model="input" @blur="blur" @keydown.native="keydown"/>
    </fu-read-write-switch>
  </div>
</template>

<script>
export default {
  name: "BaseDemo",
  data() {
    return {
      write: false,
      input: "单击填写"
    }
  },
  methods: {
    change(obj) {
      console.log(obj)
    },
    read() {
      this.write = false
    },
    blur() {
      this.read()
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.read()
      }
    }
  }
}
</script>
