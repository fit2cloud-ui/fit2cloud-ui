<example path="./examples/BaseSearchbar.vue"/>

<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes"/>
    <!-- 一级描述 -->
    <p>搜索条，提供快速搜索，高级搜索，自定义按钮</p>
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
  name: "SearchDoc",
  mixins: [examples],
  data() {
    return {
      url: "./examples/SaveSelectColumn.vue",
      attributes,
      comList: [
        {
          title: "基本用法",
          titleDesc: "高级搜索提供了5种常用的搜索组件:输入框，选择框，异步选择框，日期选择，日期时间选择",
          component: "BaseSearchbar",
        }
      ]
    };
  },
  methods: {},
  created() {
  },
  mounted() {
  }
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
