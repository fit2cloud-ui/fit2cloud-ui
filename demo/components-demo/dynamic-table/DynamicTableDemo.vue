<template>
  <div>
    <fu-dynamic-table header="动态表格" :data="data" :buttons="buttons" :search-config="searchConfig">
      <el-table-column label="姓名" width="200" prop="username"/>
      <el-table-column label="状态" width="200">
        <template v-slot:default="{row}">
          <el-tag v-if="row.status === 'Enabled'" type="success" size="small">启用</el-tag>
          <el-tag v-if="row.status === 'Disabled'" type="info" size="small">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template v-slot:default="{row}">
          {{ row.createTime | datetimeFormat }}
        </template>
      </el-table-column>
    </fu-dynamic-table>
  </div>
</template>

<script>
import FuDynamicTable from "@/components/dynamic-table/FuDynamicTable";

export default {
  name: "DynamicTableDemo",
  components: {FuDynamicTable},
  data() {
    return {
      buttons: [
        {
          label: "编辑", icon: "el-icon-edit", click: (row) => {
            console.log("编辑:" + row.username)
          }
        }, {
          label: "执行", icon: "el-icon-video-play", click: (row) => {
            console.log("执行:" + row.username)
          }
        }, {
          label: "删除", icon: "el-icon-delete", type: "danger", click: (row) => {
            console.log("删除:" + row.username)
          }, show: true
        }, {
          label: "复制", icon: "el-icon-document-copy", click: (row) => {
            console.log("复制:" + row.username)
          }
        }, {
          label: "定时任务", icon: "el-icon-timer", click: (row) => {
            console.log("定时任务:" + row.username)
          }
        }
      ],
      data: [
        {username: "admin", status: "Enabled", createTime: 1613641857019},
        {username: "editor", status: "Enabled", createTime: 1613641857019},
        {username: "readonly", status: "Enabled", createTime: 1613641857019},
        {username: "other", status: "Disabled", createTime: 1613641857019},
      ],
      searchConfig: {
        quickPlaceholder: "按 姓名/邮箱 搜索",
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
    }
  }
}
</script>

<style scoped>

</style>
