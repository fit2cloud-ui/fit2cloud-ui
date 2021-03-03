<template>
  <div
    class="code-example"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <component :is="component.name" />
    </div>
    <div class="meta" ref="meta" :style="{ height: childHeight }">
      <code-block
        :label="label"
        :lang="lang"
        ref="code-block"
        v-show="showCode"
      >
        <slot>{{ component.source }}</slot>
      </code-block>
    </div>

    <div class="demo-block-control" ref="control" @click="showCode = !showCode">
      <transition name="arrow-slide">
        <i :class="[iconClass(), { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText() }}</span>
      </transition>
    </div>
    <el-tooltip content="隐藏代码" placement="left">
      <el-button
        v-show="fixedControl"
        class="is-fixed"
        @click="showCode = false"
        icon="el-icon-caret-top"
        circle
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
import CodeBlock from "./CodeBlock";

export default {
  name: "CodeExample",
  components: { CodeBlock },
  props: {
    component: {
      type: Object,
      default: () => ({}),
    },
    title: String,
    label: {
      type: String,
      default: "Vue",
    },
    lang: String,
  },
  data: () => ({
    showCode: false,
    hovering: false,
    childHeight: "0",
    fixedControl: false,
    scrollParent: null,
  }),
  watch: {
    showCode(val) {
      this.$nextTick(() => {
        this.childHeight = val
          ? `${this.$refs["code-block"].$el.offsetHeight}px`
          : "0";
      });
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        window.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    },
  },
  methods: {
    iconClass() {
      return this.showCode ? "el-icon-caret-top" : "el-icon-caret-bottom";
    },
    controlText() {
      return this.showCode ? "隐藏代码" : "显示代码";
    },
    codeArea() {
      return this.$ref["code-block"];
    },
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();

      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },
  },
};
</script>
<style lang="scss" scoped>
.code-example {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }
  .source {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }
  .is-fixed {
    position: fixed;
    bottom: 50px;
    right: 150px;
    color: #2D61A2;
    font-size: 16px;
  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }
    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
