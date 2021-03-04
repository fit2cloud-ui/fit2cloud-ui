<example path="./examples/BaseTable.vue"/>
<example path="./examples/StripeTable.vue"/>
<example path="./examples/ComplexTableDemo.vue"/>

<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes" />
    <!-- 展示内容 -->
    <p>用于展示多条结构类似的数据，可对数据进行搜索、筛选、刷新等操作。</p>
    <!-- BaseTable内容 -->
    <br>
    <h2>基本用法</h2>
    <p>基础的表格展示用法。</p>
    <code-example
      title="BaseTable"
      description="当<keyword>el-table</keyword>元素中注入data对象数组后，
      在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。"
      :component="examples['base-table']"
    />
    <!-- StripeTable内容 -->
    <br>
    <h2>带斑马纹表格</h2>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <code-example
      title="StripeTable"
      :component="examples['stripe-table']"
    />
    <!-- ComplexTableDemo内容 -->
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
