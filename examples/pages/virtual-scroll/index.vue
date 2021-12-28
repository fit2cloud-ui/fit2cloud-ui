<example path="./examples/VirtualScrollBaseDemo.vue"/>
<example path="./examples/VirtualScrollCustomItem.vue"/>
<example path="./examples/VirtualHorizontalScrollDemo.vue"/>
<template>
  <div>
    <!-- 文档说明 -->
    <document-table :data="attributes"/>
    <!-- 一级描述 -->
    <p>垂直或水平滚动，可自定义项目内容</p>
    <!--内容 -->
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
  name: "VirtualScrollDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
      comList: [
        {
          title: "基础示例",
          titleDesc: "10000条数据，只会加载显示区域的DOM元素",
          component: "VirtualScrollBaseDemo",
        }, {
          title: "自定义Item",
          titleDesc: "通过<template v-slot=\"{item}\">自定义Item内容",
          component: "VirtualScrollCustomItem",
        }, {
          title: "水平滚动",
          titleDesc: "通过设置horizontal实现水平滚动",
          component: "VirtualHorizontalScrollDemo",
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
