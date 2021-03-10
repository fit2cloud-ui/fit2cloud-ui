<template>
  <div>
    <div>
      <h4>size: mini(默认值)</h4>
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search"/>
      <h4>size: small</h4>
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search" size="small"/>
      <h4>size: medium</h4>
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search" size="medium"/>
    </div>
    <h4>搜索条件：</h4>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script>
export default {
  name: "BaseSearchbar",
  data() {
    return {
      components: [
        {field: "name", label: "输入", component: "FuComplexInput"},
        {
          field: "status",
          label: "选项",
          component: "FuComplexSelect",
          options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
        }
      ],
      condition: {}
    }
  },
  methods: {
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
  background-color: #F5F9FF;
}
</style>
