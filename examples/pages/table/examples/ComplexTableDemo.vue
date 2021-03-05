<template>
  <!-- <div> -->
  <complex-table header="动态表格" local-key="demo" :data="data" :columns="columns"
    :search-config="searchConfig" :pagination-config="paginationConfig" @search="search">
    <el-table-column type="selection"></el-table-column>
    <el-table-column label="姓名" min-width="200" prop="username"/>
    <el-table-column label="状态" min-width="200" :show="false">
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
    <fu-table-operations :buttons="buttons" label="操作" fix />
  </complex-table>
  <!-- </div> -->
</template>

<script>
import ComplexTable from "./ComplexTable";

const data = [
  { username: "admin", status: "Enabled", createTime: 1613641857019 },
  { username: "editor", status: "Enabled", createTime: 1613641857019 },
  { username: "readonly", status: "Enabled", createTime: 1613641857019 },
  { username: "other1", status: "Disabled", createTime: 1613641857019 },
  { username: "other2", status: "Enabled", createTime: 1613641857019 },
  { username: "other3", status: "Disabled", createTime: 1613641857019 },
  { username: "other4", status: "Enabled", createTime: 1613641857019 },
  { username: "other5", status: "Disabled", createTime: 1613641857019 },
  { username: "other6", status: "Enabled", createTime: 1613641857019 },
  { username: "other7", status: "Enabled", createTime: 1613641857019 },
  { username: "other8", status: "Disabled", createTime: 1613641857019 },
  { username: "other9", status: "Disabled", createTime: 1613641857019 },
  { username: "other10", status: "Disabled", createTime: 1613641857019 },
];

export default {
  name: "ComplexTableDemo",
  components: { ComplexTable },
  data() {
    return {
      columns: [],
      buttons: [
        {
          label: "编辑",
          icon: "el-icon-edit",
          click: (row) => {
            console.log("编辑:" + row.username);
          },
        },
        {
          label: "执行",
          icon: "el-icon-video-play",
          click: (row) => {
            console.log("执行:" + row.username);
          },
        },
        {
          label: "删除",
          icon: "el-icon-delete",
          type: "danger",
          click: (row) => {
            console.log("删除:" + row.username);
          },
          show: true,
        },
        {
          label: "复制",
          icon: "el-icon-document-copy",
          click: (row) => {
            console.log("复制:" + row.username);
          },
        },
        {
          label: "定时任务",
          icon: "el-icon-timer",
          click: (row) => {
            console.log("定时任务:" + row.username);
          },
        },
      ],
      searchConfig: {
        quickPlaceholder: "按 姓名/邮箱 搜索",
        components: [
          {
            field: "name",
            label: "姓名",
            component: "FuComplexInput",
            defaultOperator: "eq",
          },
          { field: "email", label: "Email", component: "FuComplexInput" },
          {
            field: "status",
            label: "状态",
            component: "FuComplexSelect",
            options: [
              { label: "运行中", value: "Running" },
              { label: "成功", value: "Success" },
              { label: "失败", value: "Fail" },
            ],
            multiple: true,
          },
          {
            field: "create_time",
            label: "创建时间",
            component: "FuComplexDateTime",
          },
        ],
      },
      paginationConfig: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
      data: [],
    };
  },
  methods: {
    search(condition) {
      console.log(condition);
      this.paginationConfig.total = data.length;
      const { currentPage, pageSize } = this.paginationConfig;
      let start = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      this.data = data.slice(start, end);
    },
  },
  created() {
    this.search();
  },
};
</script>

<style scoped>
</style>
