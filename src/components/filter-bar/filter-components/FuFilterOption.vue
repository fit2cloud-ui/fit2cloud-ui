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
