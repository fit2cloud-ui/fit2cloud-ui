<template>
  <div>
    <el-button @click="init">设置条件</el-button>
    <fu-search-bar :components="components" @exec="search" ref="search"/>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script>
export default {
  name: "EchoConditionsDemo",
  data() {
    return {
      options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
      components: [
        {field: "name", label: "输入", component: "FuComplexInput"},
        {
          field: "status",
          label: "选项",
          component: "FuComplexSelect",
          options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
        },
        {field: "date", label: "日期", component: "FuComplexDate"},
      ],
      condition: {},
    }
  },
  methods: {
    init() {
      let conditions = {
        quick: {
          value: "快速查询值"
        },
        name: {
          operator: "eq",
          value: "张三"
        },
        status: {
          operator: "ne",
          value: "Enable"
        }
      }
      this.$refs.search.setConditions(conditions)
    },
    search(condition) {
      console.log(condition)
      this.condition = condition
    },
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
