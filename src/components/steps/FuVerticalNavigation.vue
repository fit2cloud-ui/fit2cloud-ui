<template>
  <el-steps :active="stepper.index" v-bind="stepper">
    <el-step v-for="(step, i) in steps" :key="i" v-bind="step" @click.native="click(i)"
      :class="disable(i) && 'fu-step--disable'">
      <template #description>
        <span>{{ step.description }}</span>
        <el-collapse-transition>
          <div v-if="i === stepper.index">
            <slot v-bind:step="step"></slot>
          </div>
        </el-collapse-transition>
      </template>
    </el-step>
  </el-steps>
</template>

<script>
export default {
  name: "FuVerticalNavigation",
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
