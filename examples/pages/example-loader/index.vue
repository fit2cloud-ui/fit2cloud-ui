<example path="./examples/DemoButtons.vue"/>

<template>
  <div>
    <h1></h1>
    <code-example title="Buttons" :component="examples['demo-buttons']"/>
  </div>
</template>

<script>
import examples from '../../mixins/docsExample'
export default {
  name: "ExampleLoader",
  mixins: [examples],
  props: {
  
  },
  data: () => ({
    showCode: false,
    isThemeDark: false
  }),
  methods: {
  
  }
}
</script>
