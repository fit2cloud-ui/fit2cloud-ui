<template>
  <div class="fu-step" v-loading="loading">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FuStep",
  computed: {
    loading() {
      return this.$parent.stepper?.loading || false;
    },
  },
};
</script>
