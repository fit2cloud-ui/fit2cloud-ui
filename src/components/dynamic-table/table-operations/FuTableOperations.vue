<template>
  <el-table-column :width="width" v-bind="$attrs" v-on="$listeners" v-if="showButtons">
    <template v-slot:default="{row}">
      <fu-table-button v-for="(btn, i) in noEllipsisButtons" :key="i" v-bind="btn" @click="btn.click(row)"/>
      <fu-table-ellipsis-button :buttons="ellipsisButtons" :row="row" v-if="ellipsisButtons.length > 0"/>
    </template>
  </el-table-column>
</template>

<script>
import FuTableButton from "./FuTableButton";
import FuTableEllipsisButton from "@/components/dynamic-table/table-operations/FuTableEllipsisButton";
import Locale from "@/mixins/locale";

export default {
  name: "FuTableOperations",
  components: {FuTableEllipsisButton, FuTableButton},
  mixins: [Locale],
  props: {
    ellipsis: { // 超过几个按钮时显示省略号，如果只多出来一个也不会显示省略号
      type: Number,
      default: 3
    },
    buttons: {
      type: Array,
      required: true
    },
  },
  computed: {
    showButtons() {
      return this.buttons?.filter(btn => btn.show !== false)
    },
    width() {
      let width
      const MIN_WIDTH = 80;
      if (this.hasEllipsis) {
        // padding + first btn + other btn(margin left 10) + ellipsis
        width = 20 + 28 + (this.noEllipsisButtons.length - 1) * 38 + 24;
      } else {
        // padding + first btn + other btn(margin left 10)
        width = 20 + 28 + (this.showButtons.length - 1) * 38;
      }
      return width < MIN_WIDTH ? MIN_WIDTH : width
    },
    noEllipsisButtons() {
      return this.hasEllipsis ? this.showButtons.slice(0, this.ellipsis) : this.showButtons;
    },
    ellipsisButtons() {
      return this.hasEllipsis ? this.showButtons.slice(this.ellipsis) : [];
    },
    hasEllipsis() {
      // 省略号本身也占一个按钮的位置
      return this.showButtons?.length > this.ellipsis + 1;
    }
  }
}
</script>
