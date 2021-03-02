<example path="./examples/DemoButtons.vue"/>

<template>
  <div>
    <code-example title="Buttons" :component="examples['demo-buttons']"/>
  </div>
</template>

<script>
import examples from '../../mixins/docsExample'
export default {
  name: "ExampleLoader",
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
