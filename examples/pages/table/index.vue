<example path="./examples/ComplexTableDemo.vue"/>

<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes" />
    <!-- 展示内容 -->
    <p>用于展示多条结构类似的数据，可对数据进行搜索、筛选、刷新等操作。</p>
    <br>
    <h2>动态表格</h2>
    <p>基础的表格展示用法。</p>
    <code-example
      title="ComplexTable"
      :component="examples['complex-table-demo']"
    />
  </div>
</template>

<script>
import examples from "../../mixins/docsExample";
import attributes from "./attributes";
export default {
  name: "TableDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
