<example path="./examples/BaseTable.vue" />
<example path="./examples/StripeTable.vue" />
<example path="./examples/ComplexTableDemo.vue" />

<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes" />
    <!-- 一级描述 -->
    <p>用于展示多条结构类似的数据，可对数据进行搜索、筛选、刷新等操作。</p>
    <!-- BaseTable内容 -->
    <div class="component-block" v-for="(item, index) in comList" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.titleDesc }}</p>
      <code-example :description="item.description" :component="examples[item.component]"/>
    </div>
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
      comList: [
        {
          title: "基本用法",
          titleDesc: "基础的表格展示用法。",
          component: "base-table",
          description: `当<keyword>el-table</keyword>元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。
          可以使用width属性来定义列宽。`
        },
        {
          title: "带斑马纹表格",
          titleDesc: "使用带斑马纹的表格，可以更容易区分出不同行的数据。",
          component: "stripe-table"
        },
        {
          title: "动态表格",
          titleDesc: "基础的表格展示用法。",
          component: "complex-table-demo"
        }
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.component-block {
  margin-top: 40px;
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
