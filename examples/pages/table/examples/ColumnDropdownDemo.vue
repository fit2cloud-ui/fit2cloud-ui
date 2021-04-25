<template>
  <div>
    <fu-table :data="tableData" local-key="TableDoc">
      <el-table-column type="selection"></el-table-column>
      <fu-table-column-dropdown :menus="menus"></fu-table-column-dropdown>
      <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>
      <el-table-column prop="address" label="地址" min-width="300" :show="false"></el-table-column>
    </fu-table>
  </div>
</template>

<script>
export default {
  name: "ColumnDropdownDemovue",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "张三",
          address: "北京朝阳区财富中心 0室",
        },
        {
          date: "2016-05-02",
          name: "张三",
          address: "北京朝阳区财富中心 0室",
        },
        {
          date: "2016-05-01",
          name: "张三",
          address: "北京朝阳区财富中心 2室",
        },
        {
          date: "2016-05-03",
          name: "张三",
          address: "北京朝阳区财富中心 3室",
        },
      ],
      menus: [
        {
          label: "批量编辑",
          icon: "el-icon-view",
          click: (row) => {
            console.log("编辑:" + row.name);
          },
        },
        {
          label: "批量移动",
          icon: "el-icon-rank",
          click: (row) => {
            console.log("移动:" + row.name);
          },
        },
        {
          label: "批量删除",
          icon: "el-icon-delete",
          click: (row) => {
            console.log("删除:" + row.name);
          },
          divided: true,
        },
      ],
    };
  },
  methods: {},
};
</script>
