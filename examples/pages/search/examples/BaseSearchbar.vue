<template>
  <div>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search"/>
    <div class="condition_display">
      搜索条件：{{ condition }}
    </div>
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
  name: "BaseSearchbar",
  data() {
    return {
      components: [
        {field: "name", label: "姓名", component: "FuComplexInput"},
        {
          field: "status",
          label: "状态",
          component: "FuComplexSelect",
          options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
          multiple: true,
          filterable: true,
        },
        {field: "create_time", label: "创建日期", component: "FuComplexDate"},
        {
          field: "async_status",
          label: "异步状态",
          component: "FuComplexAsyncSelect",
          initOptions: (options, loading) => {
            getOptions().then(response => {
              response.forEach(o => {
                options.push(o)
                loading.status = false
              })
            })
          },
        },
      ],
      condition: {}
    }
  },
  methods: {
    search(condition) {
      console.log(condition)
      this.condition = condition
    }
  }
}
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  min-height: 60px;
  overflow-y: auto;
}
</style>
