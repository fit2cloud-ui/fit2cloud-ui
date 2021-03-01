<template>
  <div>
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
