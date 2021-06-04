<template>
  <el-dropdown @command="handleCommand" class="fu-table-more-button">
    <el-button circle icon="el-icon-more" :size="size" @click.stop/>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(btn, i) in buttons" :key="i" :icon="btn.icon" :disabled="disabled(btn)" :command="btn">
        {{ btn.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import FuTableButton from "./FuTableButton";

export default {
  name: "FuTableMoreButton",
  components: {FuTableButton},
  props: {
    row: Object,
    buttons: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "mini"
    }
  },
  methods: {
    handleCommand(btn) {
      btn.click(this.row)
    }
  },
  computed: {
    disabled({row}) {
      return btn => {
        return typeof btn.disabled === "function" ? btn.disabled(row) : btn.disabled
      }
    }
  }
}
</script>
