<template>
  <el-steps :active="stepper.index" v-bind="stepper">
    <el-step v-for="(step, i) in steps" :key="i" v-bind="step" @click.native="click(i)"
      :class="disable(i) && 'fu-step--disable'">
      <template #description>
        <span>{{ step.description }}</span>
        <el-collapse-transition>
          <div class="fu-steps__container" v-if="i === stepper.index" :style="heightStyle">
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
    stepper: Object,
    steps: Array,
    disable: Function,
  },
  computed: {
    heightStyle() {
      return {
        height: parseInt(this.stepper?.height) + "px" || "auto",
      };
    },
  },
  methods: {
    click(index) {
      !this.disable(index) && this.$emit("active", index);
    },
  },
};
</script>
