<example path="./examples/BaseDemo.vue"/>
<example path="./examples/WriteSwitchDemo.vue"/>
<example path="./examples/ReadSwitchDemo.vue"/>
<example path="./examples/CustomContentDemo.vue"/>
<example path="./examples/InputRwSwitchDemo.vue"/>
<example path="./examples/SelectRwSwitchDemo.vue"/>
<example path="./examples/TableInnerEditDemo.vue"/>

<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes"/>
    <!-- 一级描述 -->
    <p>读状态与写状态切换，读状态默认显示只读文本，可以自定义读/写状态的内容</p>
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
  name: "ReadWriteSwitchDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
      comList: [
        {
          title: "基本用法",
          titleDesc: "读写状态切换，允许自定义读写内容、自定义读写状态控制，可用于Table 表内编辑等",
          component: "BaseDemo",
        },
        {
          title: "写状态控制",
          titleDesc: "单击，双击，手动触发",
          component: "WriteSwitchDemo",
        },
        {
          title: "读状态控制",
          titleDesc: "使用v-model或者使用slot的参数切换读状态",
          component: "ReadSwitchDemo",
        },
        {
          title: "自定义读写内容",
          titleDesc: "v-slot:read 和 v-slot:default 分别为读内容和写内容",
          component: "CustomContentDemo",
          description: ``
        },
        {
          title: "InputRwSwitch",
          titleDesc: "Input状态切换组件",
          component: "InputRwSwitchDemo",
          description: `继承el-input的功能`
        },
        {
          title: "SelectRwSwitch",
          titleDesc: "Select状态切换组件",
          component: "SelectRwSwitchDemo",
          description: `继承el-select的功能`
        },
        {
          title: "表格行内编辑",
          titleDesc: "使用 InputRwSwitch 和 SelectRwSwitch 实现行内编辑功能",
          component: "TableInnerEditDemo",
          description: ``
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
