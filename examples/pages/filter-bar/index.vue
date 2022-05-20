<example path="./examples/BaseFilterBar.vue"/>
<example path="./examples/SetConditionsDemo.vue"/>
<example path="./examples/SlotDemo.vue"/>

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
  name: "FilterBarDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
      comList: [
        {
          title: "基本用法",
          titleDesc: "使用FilterBar",
          component: "BaseFilterBar",
        },
        {
          title: "回显条件",
          titleDesc: "设置初始条件，搜索框自动回显",
          component: "SetConditionsDemo",
          description: `筛选组件需要提供init和getCondition方法，如果在mounted中初始化必须使用this.$nextTick`
        },
        {
          title: "插槽示例",
          titleDesc: "可以通过插槽设置上部左侧内容、上部右侧内容",
          component: "SlotDemo",
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
