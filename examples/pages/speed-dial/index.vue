<example path="./examples/SpeedDialDemo.vue"/>

<template>
  <div>
    <!-- <document-table :data="attributes"/> -->
    <code-example
      title="ComplexTable"
      :component="examples['speed-dial-demo']"
    />
  </div>
</template>

<script>
import examples from "../../mixins/docsExample";
export default {
  name: "SpeedDialDoc",
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
