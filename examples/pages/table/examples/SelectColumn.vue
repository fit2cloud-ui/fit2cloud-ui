<template>
  <div>
    Popover选列按钮(hover)：
    <fu-table-column-select :columns="columns"/>
    Popover选列按钮(click)：
    <fu-table-column-select :columns="columns" trigger="click"/>
    Dialog选列按钮：
    <fu-table-column-select type="dialog" :columns="columns"/>
    Button选列按钮：
    <fu-table-column-select type="button" :columns="columns"/>

    <fu-table :data="tableData" :columns="columns">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>
      <el-table-column prop="address" label="地址" :show="false"></el-table-column>
    </fu-table>
  </div>
</template>

<script>
export default {
  name: "SelectColumn",
  data() {
    return {
      columns: [],
      tableData: [{
        date: "2016-05-02",
        name: "张三",
        address: "北京朝阳区财富中心 0室",
      }, {
        date: "2016-05-04",
        name: "张三",
        address: "北京朝阳区财富中心 1室",
      }, {
        date: "2016-05-01",
        name: "张三",
        address: "北京朝阳区财富中心 2室",
      }, {
        date: "2016-05-03",
        name: "张三",
        address: "北京朝阳区财富中心 3室",
      }]
    }
  }
}
</script>
