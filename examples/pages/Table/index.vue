<example path="./examples/ComplexTableDemo.vue"/>

<template>
  <div>
   <code-example title="ComplexTable" :component="examples['complex-table-demo']"/>
  </div>
</template>

<script>
import examples from '../../mixins/docsExample'
export default {
  name: "TableDoc",
  mixins: [examples],
  data() {
    return {};
  },
  methods: {},
  created() {
  },
  mounted() {
    // console.log(ComplexTableDemo.data);
  },
};
</script>

<style lang="scss" scoped>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding: 5px 20px 15px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
