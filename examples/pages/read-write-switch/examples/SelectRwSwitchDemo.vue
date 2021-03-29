<template>
  <div>
    <fu-select-rw-switch v-model="select">
      <template #read>
        <el-tag disable-transitions v-if="select === 'zh-CN'" type="danger">中文</el-tag>
        <el-tag disable-transitions v-else>English</el-tag>
      </template>
      <el-option key="zh-CN" label="中文" value="zh-CN"/>
      <el-option key="en-US" label="English" value="en-US"/>
    </fu-select-rw-switch>
  </div>
</template>

<script>
export default {
  name: "SelectRwSwitchDemo",
  data() {
    return {
      select: "zh-CN"
    }
  }
}
</script>
