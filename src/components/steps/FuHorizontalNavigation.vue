<template>
  <el-steps :active="stepper.index" v-bind="stepper">
    <el-step v-for="(step, index) in steps" :key="index" v-bind="step" @click.native="click(index)"
      :class="disable(index) && 'fu-step--disable'" />
  </el-steps>
</template>

<script>
export default {
  name: "FuHorizontalNavigation",
  props: {
    stepper : Object,
    steps: Array,
    disable: Function,
  },
  methods: {
    click(index) {
      (!this.disable(index)) && this.$emit("active", index);
    },
  },
};
</script>
