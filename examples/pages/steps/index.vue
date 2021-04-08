<example path="./examples/BaseSteps.vue"/>
<example path="./examples/VerticalSteps.vue"/>
<example path="./examples/StepsHooksDemo.vue"/>
<example path="./examples/SettingFooterDemo.vue"/>
<example path="./examples/CustomFooterDemo.vue"/>
<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes"/>
    <!-- 一级描述 -->
    <p>el-steps的扩展，增加展示区、步骤按钮以及激活、离开的钩子函数等，除了以下额外增加的功能和属性，其他的用法与el-steps一致</p>
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
  name: "StepsDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
      comList: [
        {
          title: "基本用法",
          titleDesc: "继承el-steps的功能，增加内容展示区；步骤节点被激活后可点击。",
          component: "BaseSteps",
        },
        {
          title: "竖式步骤条",
          titleDesc: "竖直方向的步骤条。",
          component: "VerticalSteps",
        },
        {
          title: "扩展的钩子用法",
          titleDesc: "节点激活前beforeActive、节点离开前beforeLeave两个钩子函数，即可用在节点fu-step上，也可用在fu-steps上，效果一样。",
          component: "StepsHooksDemo",
        },
        {
          title: "footer步骤按钮的配置",
          titleDesc: "目前footer按钮可以修改文字和大小",
          component: "SettingFooterDemo",
        },
        {
          title: "自定义footer步骤按钮",
          titleDesc: "自定义的footer，原有按钮的相关事件和配置属性失效。",
          component: "CustomFooterDemo",
        },
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
