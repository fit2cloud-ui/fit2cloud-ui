<template>
  <fu-table :data="tableData" style="width: 100%" @select="select">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </fu-table>
</template>

<script>
export default {
  name: "BaseTable",
  data() {
    return {
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
    };
  },
  methods: {
    select(selection) {
      console.log(selection)
    }
  }
};
</script>
