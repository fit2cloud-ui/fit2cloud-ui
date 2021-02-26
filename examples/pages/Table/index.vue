
<template>
  <div class="demo-block"><ComplexTableDemo /></div>
</template>

<script>
import ComplexTableDemo from "./examples/ComplexTableDemo";
export default {
  name: "TableDoc",
  data() {
    return {};
  },
  components: { ComplexTableDemo },

  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding:5px 20px 15px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
  }
}
</style>
