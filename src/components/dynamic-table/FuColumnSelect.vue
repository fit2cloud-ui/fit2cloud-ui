<template>
  <el-popover :trigger="trigger" :visible-arrow="false" class="fu-column-select" v-if="!isFixAll">
    <div v-for="(c, i) in selectable" :key="i" class="fu-column-select__item">
      <el-checkbox v-model="c.show" :checked="c.show !== false">
        {{ c.label }}
      </el-checkbox>
    </div>
    <fu-search-bar-button slot="reference" icon="el-icon-more"/>
  </el-popover>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";

const triggers = []

export default {
  name: "FuColumnSelect",
  components: {FuSearchBarButton},
  props: {
    trigger: {
      type: String,
      default: "hover",
      validator: value => ['click', 'focus', 'hover', 'manual'].includes(value)
    },
    columns: Array
  },
  methods: {
    show(labelOrIndex) {
      if (typeof labelOrIndex === "string") {
        this.columns.find(c => c.label === labelOrIndex).forEach(c => c.show = true)
      } else {
        this.columns[labelOrIndex].show = true;
      }
    },
    hide(labelOrIndex) {
      if (typeof labelOrIndex === "string") {
        this.columns.find(c => c.label === labelOrIndex).forEach(c => c.show = false)
      } else {
        this.columns[labelOrIndex].show = false;
      }
    },
    showAll() {
      this.columns.forEach(c => c.show = true)
    },
    hideAll() {
      this.columns.forEach(c => c.show = false)
    }
  },
  computed: {
    selectable({columns}) {
      return columns.filter(c => !c.fix)
    },
    isFixAll() {
      return this.columns.every(c => c.fix)
    }
  }
}
</script>
