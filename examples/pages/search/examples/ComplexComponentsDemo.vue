<template>
  <div>
    <h4>
      1、使用v-slot:complex
    </h4>
    <fu-search-bar quick-placeholder="快速搜索" @exec="search">
      <template v-slot:complex>
        <fu-complex-input field="username" label="输入"/>
        <fu-complex-select field="status" label="选项" :options="options" multiple filterable/>
        <fu-complex-async-select field="status" label="异步选项" :options="options" :init-options="initOptions"/>
        <fu-complex-date field="date" label="日期"/>
        <fu-complex-date-time field="time" label="日期时间"/>
      </template>
    </fu-search-bar>

    <h4>
      2、使用components数组
    </h4>
    <fu-search-bar quick-placeholder="快速搜索" :components="components" @exec="search"/>
    <h4>搜索条件：</h4>
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
  name: "ComplexSearchDemo",
  data() {
    return {
      components: [
        {field: "name", label: "输入", component: "FuComplexInput"},
        {
          field: "status",
          label: "选项",
          component: "FuComplexSelect",
          options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
          multiple: true,
          filterable: true,
        }
      ],
      condition: {},
    }
  },
  methods: {
    initOptions(options, loading) {
      getOptions().then(response => {
        response.forEach(o => {
          options.push(o)
          loading.status = false
        })
      })
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
