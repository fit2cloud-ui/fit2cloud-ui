<example path="./examples/SearchDemo.vue"/>

<template>
  <div>
    <!-- <document-table :data="attributes"/> -->
    <code-example
      title="ComplexTable"
      :component="examples['SearchDemo']"
    />
  </div>
</template>

<script>
import examples from "../../mixins/docsExample";
export default {
  name: "SearchDoc",
  mixins: [examples],
  data() {
    return {
      // attributes
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
