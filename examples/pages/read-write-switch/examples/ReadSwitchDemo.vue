<template>
  <div>
    <h3>
      v-model + 事件 控制状态
    </h3>
    <div style="line-height: 40px;">
      <fu-read-write-switch :data="input" v-model="write">
        <el-input v-model="input" @blur="blur" @keydown.native="keydown"/>
      </fu-read-write-switch>
    </div>

    <h3>
      slot参数 + 事件 控制状态
    </h3>
    <div style="line-height: 40px;">
      <fu-read-write-switch :data="input" v-slot:default="{read}">
        <el-input v-model="input" @blur="read" @keydown.native="keydown2($event, read)"/>
      </fu-read-write-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadWriteSwitchDemo",
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
    },
    keydown2(e, read) {
      if (e.keyCode === 13) {
        read()
      }
    }
  }
}
</script>
