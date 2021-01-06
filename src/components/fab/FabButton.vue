<template functional>
  <div class="fab-button" :class="data.class"
       :style="[data.style, {width: props.size, height: props.size}]"
       v-bind="data.attrs"
       v-on="data.on">
    <slot>
      <i :class="props.icon"/>
    </slot>
  </div>
</template>

<script>
export default {
  name: "FabButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "el-icon-plus"
    },
    size: {
      type: String,
      default: "32px"
    },
  }
}
</script>

<style scoped>
.fab-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2)
}

.fab-button:hover {
  transform: scale(1.1);
}

.fab-button:active {
  transform: scale(1);
}
</style>
