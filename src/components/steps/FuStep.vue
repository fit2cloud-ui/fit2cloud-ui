<template>
  <div class="fu-step" v-loading="loading">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FuStep",
  inject: ['stepper'],
  computed: {
    loading() {
      return this.stepper?.isLoading || false;
    },
  },
};
</script>
