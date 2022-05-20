<template>
  <div class="fu-filter-option"
       :class="{'is-selected': selected, 'is-disabled': disabled}"
       @click.stop="click">
    {{ label || value }}
  </div>
</template>

<script>
export default {
  name: "FuFilterOption",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['select'],
  methods: {
    click() {
      this.select.clickOption(this.value, this.selected)
    }
  },
  computed: {
    selected() {
      if (!this.select.multiple) {
        return this.select.value === this.value
      } else {
        return this.select.value.includes(this.value)
      }
    },
  }
}
</script>

<style lang="scss">
.fu-filter-option {
  padding: 1px 6px;
  font-size: 14px;
  line-height: 22px;
  background: #F5F6F7;
  border-radius: 2px;
  color: #1F2329;
  cursor: pointer;
  margin: 11px 6px;

  &.is-selected, &:hover {
    background: rgba(51, 112, 255, 0.1);
    color: #0C296E;
  }

  &:active {
    transform: scale(0.9)
  }
}
</style>
