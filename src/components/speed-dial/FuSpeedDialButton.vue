<template functional>
  <div class="fu-speed-dial-button" :class="data.class"
       :style="{width: props.size, height: props.size,
       backgroundColor:props.backgroundColor, color:props.color, fontSize:props.fontSize}"
       v-bind="data.attrs"
       v-on="data.on">
    <slot>
      <i :class="props.icon"/>
    </slot>
  </div>
</template>

<script>
export default {
  name: "FuSpeedDialButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    size: {
      type: String,
      default: "32px"
    },
    backgroundColor: String,
    color: String,
    fontSize: String
  }
}
</script>
