<template>
  <div>
    <div>
      <fu-filter-bar ref="filter" @exec="exec" :result-count="count" size="small">
        <template #tl>
          <el-button size="small">导出数据</el-button>
        </template>
        <template #default>
          <fu-filter-select size="small" label="事件类型" field="type" :options="options" multiple clearable filterable/>
          <fu-filter-date size="small" label="操作日期" field="date"/>
          <fu-filter-date-time size="small" label="操作时间" field="datetime"/>
        </template>
        <template #buttons>
          <el-button size="small">选列</el-button>
        </template>
      </fu-filter-bar>
    </div>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script>
export default {
  name: "SlotDemo",
  data() {
    return {
      count: 0,
      quick: "",
      options: [{label: "选项1", value: 1},
        {label: "选项2", value: 2},
        {label: "选项3", value: 3},
        {label: "选项4", value: 4},
        {label: "选项5", value: 5},
        {label: "选项6", value: 6},
        {label: "选项7", value: 7},
        {label: "选项8", value: 8},
        {label: "选项9", value: 9},
        {label: "选项10", value: 10},
      ],
      components: [
        {
          field: "groups",
          label: "区域",
          component: "FuFilterSelect",
          options: [{label: "北区", value: "1"}, {label: "南区", value: "2"}, {label: "东区", value: "3"}],
          multiple: true,
          clearable: true,
          filterable: true
        },
        {
          field: "date",
          label: "操作日期",
          component: "FuFilterDate"
        }
      ],
      condition: {}
    }
  },
  methods: {
    init() {
      this.$refs.filter.setConditions({user: {value: [2, 3, 4]}})
    },
    exec(condition) {
      this.condition = condition
      this.count = Object.keys(condition).length * 10
    }
  }
}
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>
