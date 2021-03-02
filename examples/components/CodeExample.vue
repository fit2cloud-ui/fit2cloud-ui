<template>
  <div class="code-example">
    <component :is="component.name"/>
    <code-block :label="label" :lang="lang">
      <slot>{{ component.source }}</slot>
    </code-block>
  </div>

</template>

<script>
import CodeBlock from "./CodeBlock";

export default {
  name: 'CodeExample',
  components: {CodeBlock},
  props: {
    component: {
      type: Object,
      default: () => ({})
    },
    title: String,
    label: {
      type: String,
      default: 'Vue'
    },
    lang: String
  },
  data: () => ({
    showCode: false,
  }),
  methods: {
    toggleCode() {
      this.showCode = !this.showCode
    },
  }
}
</script>
<style lang="scss" scoped>
.code-example {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding: 5px 20px 15px;
  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
