<template>
  <div>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search">
      <fu-search-bar-button icon="el-icon-more" tooltip="选择列"/>
      <fu-search-bar-button icon="el-icon-download" tooltip="导出Excel"/>
    </fu-search-bar>
  </div>
</template>

<script>
import FuSearchBar from "@/components/search-bar"
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";

export default {
  name: "SearchDemo",
  components: {FuSearchBarButton, FuSearchBar},
  data() {
    return {
      components: [
        {field: "name", label: "姓名", component: "FuInputComponent", defaultOperator: "eq"},
        {field: "email", label: "Email", component: "FuInputComponent"},
        {
          field: "status",
          label: "状态",
          component: "FuSelectComponent",
          options: [
            {label: "运行中", value: "Running"},
            {label: "成功", value: "Success"},
            {label: "失败", value: "Fail"}
          ],
          multiple: true
        },
        {field: "create_time", label: "创建时间", component: "FuDateTimeComponent"},
      ]
    }
  },
  methods: {
    search(condition, e) {
      console.log(condition, e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
