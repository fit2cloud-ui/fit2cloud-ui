<template functional>
  <div
    :class="[
      'fu-speed-dial-button',
      'fu-speed-dial-button--' + props.type,
      {
        'fu-speed-dial-button--rotate': props.rotate,
        'is-disabled': props.disabled,
        'is-active': props.active,
      },
      data.class
    ]"
    :style="{
      width: props.size,
      height: props.size,
      backgroundColor:props.backgroundColor,
      color:props.color,
      fontSize:props.fontSize
    }"
    v-bind="data.attrs"
    v-on="data.on">
    <slot>
      <i :class="props.icon"/>
    </slot>
  </div>
</template>

<script>
import {validateType} from "@/tools/theme"

export default {
  name: "FuSpeedDialButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: validateType
    },
    rotate: Boolean,
    disabled: Boolean,
    active: Boolean,
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
