<template>
  <div>
    <h4>
      1、快速搜索组件
    </h4>
    <fu-quick-search placeholder="按 姓名/邮箱 搜索" v-model="quick" @change="change" style="width: 200px"/>
    <pre class="condition_display">{{ quick }}</pre>

    <h4>
      2、禁用高级搜索
    </h4>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" @exec="search" style="width: 200px">
      <fu-search-bar-button tooltip="下载" icon="el-icon-download"/>
      <fu-search-bar-button tooltip="上传" icon="el-icon-upload2"/>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script>
const getOptions = () => {
  const options = [
    {label: "成功", value: "Success"},
    {label: "失败", value: "Fail"}
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options)
    }, 3000)
  })
}

export default {
  name: "QuickSearchDemo",
  data() {
    return {
      quick: "",
      condition: ""
    }
  },
  methods: {
    change(value) {
      console.log(value)
    },
    search(condition) {
      this.condition = condition
    }
  }
}
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>
