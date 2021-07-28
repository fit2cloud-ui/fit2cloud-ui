<example path="./examples/BaseSearchbar.vue"/>
<example path="./examples/SearchBarButtonDemo.vue"/>
<example path="./examples/QuickSearchDemo.vue"/>
<example path="./examples/ComplexSearchDemo.vue"/>
<example path="./examples/ComplexComponentsDemo.vue"/>
<example path="./examples/CustomComponentsDemo.vue"/>
<example path="./examples/EchoConditionsDemo.vue"/>

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
          titleDesc: "使用size属性控制大小: 默认值(空) / medium / small / mini",
          component: "BaseSearchbar",
        },
        {
          title: "自定义按钮",
          titleDesc: "可以禁用清除和刷新按钮，也可以添加自定义按钮",
          component: "SearchBarButtonDemo",
          description: ``
        },
        {
          title: "快速搜索",
          titleDesc: "两种方式: 1、直接使用快速搜索组件。2、禁用高级搜索(不设置高级搜索组件)",
          component: "QuickSearchDemo",
          description: `控制台显示change事件输出`
        },
        {
          title: "高级搜索",
          titleDesc: "两种方式设置高级搜索组件: 1、使用v-slot:complex。2、设置components组件数组",
          component: "ComplexSearchDemo",
          description: `控制台显示事件输出`
        },
        {
          title: "搜索组件",
          titleDesc: "高级搜索提供5种常用的搜索组件: 输入框，选择框，异步选择框，日期选择，日期时间选择",
          component: "ComplexComponentsDemo",
          description: `组件的属性情况属性说明`
        },
        {
          title: "自定义搜索组件",
          titleDesc: "高级搜索除了5种常用的搜索组件，也可以自定义搜索组件",
          component: "CustomComponentsDemo",
          description: `搜索组件需要提供init和getCondition方法`
        }
        ,
        {
          title: "回显条件",
          titleDesc: "设置初始条件，搜索框自动回显",
          component: "EchoConditionsDemo",
          description: `搜索组件需要提供init和getCondition方法`
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
