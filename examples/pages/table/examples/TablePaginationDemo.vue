<template>
  <div>
    <fu-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>
      <el-table-column prop="address" label="地址" :show="false"></el-table-column>
    </fu-table>
    <div class="pagination">
      <fu-table-pagination :current-page.sync="currentPage"
                           :page-size.sync="pageSize"
                           :total="total"
                           @size-change="sizeChange"
                           @current-change="currentChange"/>
    </div>
  </div>
</template>

<script>
const items = [{
  date: '2016-05-01',
  name: '张三',
  address: '北京朝阳区财富中心 1室'
}, {
  date: '2016-05-02',
  name: '张三',
  address: '北京朝阳区财富中心 2室'
}, {
  date: '2016-05-03',
  name: '张三',
  address: '北京朝阳区财富中心 3室'
}, {
  date: '2016-05-04',
  name: '张三',
  address: '北京朝阳区财富中心 4室'
}, {
  date: '2016-05-05',
  name: '张三',
  address: '北京朝阳区财富中心 5室'
}, {
  date: '2016-05-06',
  name: '张三',
  address: '北京朝阳区财富中心 6室'
}, {
  date: '2016-05-07',
  name: '张三',
  address: '北京朝阳区财富中心 7室'
}, {
  date: '2016-05-08',
  name: '张三',
  address: '北京朝阳区财富中心 8室'
}, {
  date: '2016-05-09',
  name: '张三',
  address: '北京朝阳区财富中心 9室'
}, {
  date: '2016-05-10',
  name: '张三',
  address: '北京朝阳区财富中心 10室'
}, {
  date: '2016-05-11',
  name: '张三',
  address: '北京朝阳区财富中心 11室'
}, {
  date: '2016-05-12',
  name: '张三',
  address: '北京朝阳区财富中心 12室'
}];
export default {
  name: "TablePaginationDemo",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 5,
      total: 0,
    }
  },
  methods: {
    currentChange() {
      console.log("currentChange")
      this.search()
    },
    sizeChange() {
      console.log("sizeChange")
      this.currentPage = 1;
      this.search()
    },
    search() {
      this.total = items.length;
      const {currentPage, pageSize} = this;
      let start = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      this.tableData = items.slice(start, end);
    },
  },
  created() {
    this.search()
  }
}
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
