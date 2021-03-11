<template>
  <div>
    <fu-search-bar quick-placeholder="快速搜索" @exec="search">
      <template v-slot:complex>
        <fu-complex-input field="username" label="姓名"/>
        <!-- 自定义组件 -->
        <custom-search-component field="email(自定义组件)" label="Email"/>
      </template>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script>
const CustomSearchComponent = {
  name: "custom-search-component",
  props: {
    field: String,
    label: String,
  },
  data() {
    return {
      condition: "",
      operator: "like",
      operatorLabel: "包含"
    }
  },
  computed: {
    valueLabel() {
      return this.condition
    }
  },
  methods: {
    getCondition() {
      if (!this.condition) return;
      let {field, label, operator, operatorLabel, condition, valueLabel} = this
      return {field, label, operator, operatorLabel, value: condition, valueLabel}
    },
    init() {
      this.condition = "";
    }
  },
  render() {
    return (
      <div style="display:flex; align-items:center;padding: 5px;font-size:12px">
        <div style="min-width:100px;padding: 0 5px;">
          {this.label}
        </div>
        <div style="min-width: 130px;padding: 0 21px;box-sizing:border-box;">
          {this.operatorLabel}
        </div>
        <div style="width:100%;padding: 0 5px;">
          <el-input size="mini" value={this.condition} on-input={(v) => this.condition = v}
                    placeholder={this.label}/>
        </div>
      </div>
    )
  }
}

const getOptions = () => {
  const options = [
    {label: "成功", value: "Success"},
    {label: "失败", value: "Fail"}
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(options)
    }, 3000)
  })
}

export default {
  name: "CustomComponentsDemo",
  components: {CustomSearchComponent},
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
