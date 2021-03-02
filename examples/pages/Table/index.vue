

<template>
  <div class="demo-block">
    <!-- <div v-html=""></div> -->
    <!-- <div id="codeView" v-highlight>
      <pre><code>
      <complex-table-demo>12232323</complex-table-demo>
        </code></pre>
    </div> -->

    <!-- <complex-table-demo>12232323</complex-table-demo> -->
    <complex-table-md></complex-table-md>
    <ComplexTableDemo />
  </div>
</template>

<script>
import axios from 'axios'
import ComplexTableDemo from "./examples/ComplexTableDemo";
import ComplexTableMd from "./examples/ComplexTableDemo.md";
export default {
  name: "TableDoc",
  data() {
    return {};
  },
  components: { ComplexTableDemo, ComplexTableMd },

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
