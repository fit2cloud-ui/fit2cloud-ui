<template>
  <el-dropdown @command="handleCommand" class="fu-table-ext-buttons">
    <el-link :underline="false">
      <el-icon class="el-icon-more"></el-icon>
    </el-link>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(btn, i) in buttons" :key="i" :icon="btn.icon" :disabled="btn.disabled" :command="btn">
        {{ btn.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import FuTableButton from "./FuTableButton";

export default {
  name: "FuTableExtButtons",
  components: {FuTableButton},
  props: {
    row: Object,
    buttons: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    handleCommand(btn) {
      btn.click(this.row)
    }
  }
}
</script>
