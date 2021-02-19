<template>
  <el-table-column v-bind="$attrs" v-on="$listeners" v-if="isShow">
    <template v-slot:default="scope" v-if="$slots.default">
      <slot v-bind="scope"></slot>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "FuSelectableColumn",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    fix: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isShow({show, fix}) {
      return show || fix
    }
  }
}
</script>
