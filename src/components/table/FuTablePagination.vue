<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: "FuTablePagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 5
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [5, 10, 20, 50, 100]
      }
    },
    total: {
      type: Number,
      default: 0
    },
  },
  methods: {
    handleSizeChange: function (size) {
      this.$emit('update:pageSize', size)
      this.$emit("size-change");
      this.$emit("change"); // 兼容历史版本
    },
    handleCurrentChange(current) {
      this.$emit('update:currentPage', current)
      this.$emit("current-change");
      this.$emit("change"); // 兼容历史版本
    }
  }
}
</script>
