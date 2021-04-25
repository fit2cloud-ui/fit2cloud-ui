<example path="./examples/BaseTable.vue"/>
<example path="./examples/SelectColumn.vue"/>
<example path="./examples/SaveSelectColumn.vue"/>
<example path="./examples/TableOperationsDemo.vue"/>
<example path="./examples/TablePaginationDemo.vue"/>
<example path="./examples/ColumnDropdownDemo.vue"/>
<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes"/>
    <!-- 一级描述 -->
    <p>el-table的扩展，增加选列功能，除了以下额外增加的功能和属性，其他的用法与el-table一致</p>
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
      url: "./examples/SaveSelectColumn.vue",
      attributes,
      comList: [
        {
          title: "基本用法",
          titleDesc: "继承el-table的功能，增加选列功能，选列功能请看下一节",
          component: "BaseTable",
        },
        {
          title: "表格选列",
          titleDesc: "给columns赋值则开启选列功能，选择显示或隐藏某些列",
          component: "SelectColumn",
          description: `建议与TableColumnSelect一起使用。设置fix属性或者type属性为selection/index/expand的列不可选择显隐，设置:show="false"的列，默认隐藏`
        },
        {
          title: "选列保存",
          titleDesc: "给表格设置唯一的local-key，将选列状态自动保存到localStorage",
          component: "SaveSelectColumn",
        },
        {
          title: "操作列",
          titleDesc: "TableOperations: 按钮自动折叠，提供选列功能，控制显隐或禁用",
          component: "TableOperationsDemo",
          description: `传入columns则显示选列按钮。控制台查看按钮的click事件`
        },
        {
          title: "列自定义下拉菜单",
          titleDesc: "可增加一列下拉菜单，允许自定义",
          component: "ColumnDropdownDemo",
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
