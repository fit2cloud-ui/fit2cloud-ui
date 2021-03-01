<example path="./examples/DemoButtons.vue"/>

<template>
  <div>
    <code-example title="Buttons" :component="examples['demo-buttons']"/>
  </div>
</template>

<script>
import examples from '../../mixins/docsExample'
import CodeBlock from "../../components/CodeBlock";
import CodeExample from "../../components/CodeExample";

export default {
  name: "ExampleLoader",
  components: {CodeExample, CodeBlock},
  mixins: [examples],
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
    isThemeDark: false
  }),
  methods: {
    toggleCode() {
      this.showCode = !this.showCode
    }
  }
}
</script>
