<template>
  <div>
    <div style="line-height: 40px;">
      <fu-read-write-switch :data="click" v-model="write">
        <el-input v-model="click" @blur="write = false"/>
      </fu-read-write-switch>
    </div>

    <div style="line-height: 40px;">
      <fu-read-write-switch :data="dblclick" v-model="write2" write-trigger="dblclick">
        <el-input v-model="dblclick" @blur="write2 = false"/>
      </fu-read-write-switch>
    </div>

    <div style="line-height: 40px;">
      <fu-read-write-switch :data="manual" v-model="write3" write-trigger="manual">
        <el-input v-model="manual" @blur="write3 = false"/>
      </fu-read-write-switch>
      <el-button @click="write3 = true">点击按钮填写</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "WriteSwitchDemo",
  data() {
    return {
      write: false,
      write2: false,
      write3: false,
      click: "单击填写",
      dblclick: "双击填写",
      manual: "点击无法填写",
    }
  }
}
</script>
