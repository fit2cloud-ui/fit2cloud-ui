<example path="./examples/ComplexTableDemo.vue"/>

<template>
  <div>
    <document-table :data="attributes" />
    <code-example
      title="ComplexTable"
      :component="examples['complex-table-demo']"
    />
  </div>
</template>

<script>
import examples from "../../mixins/docsExample";
import attributes from "./attributes.js";
export default {
  name: "TableDoc",
  mixins: [examples],
  data() {
    return {
      attributes,
      value1: '',
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
