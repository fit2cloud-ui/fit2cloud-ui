<template>
  <el-table-column class-name="fu-table-operations" :align="align" :width="computeWidth" v-bind="$attrs"
                   v-on="$listeners">
    <template #header>
      {{ $attrs.label }}
      <fu-table-column-select type="dialog" :columns="columns" :local-key="localKey" v-if="columns"/>
    </template>
    <template v-slot:default="{row}">
      <fu-table-button v-for="(btn, i) in defaultButtons(row)" :key="i" v-bind="btn" @click.stop="btn.click(row)"
                       :disabled="disableButton(btn, row)"/>
      <fu-table-more-button :buttons="moreButtons(row)" :row="row" v-if="moreButtons(row).length > 0"/>
    </template>
  </el-table-column>
</template>

<script>
import FuTableButton from "./FuTableButton";
import FuTableMoreButton from "./FuTableMoreButton";
import FuTableColumnSelect from "../table-column-select/FuTableColumnSelect";

export default {
  name: "FuTableOperations",
  components: {FuTableColumnSelect, FuTableMoreButton, FuTableButton},
  props: {
    columns: Array,
    align: {
      type: String,
      default: "center"
    },
    width: [String, Number],
    minWidth: [String, Number],
    ellipsis: { // 超过几个按钮时显示省略号，如果只超过一个也不显示省略号
      type: Number,
      default: 3
    },
    buttons: {
      type: Array,
      required: true
    }
  },
  inject: ["localKey"],
  methods: {
    showButtons(row) {
      return this.buttons?.filter(btn => typeof btn.show === "function" ? btn.show(row) !== false : btn.show !== false)
    },
    hasMore(row) {
      return this.showButtons(row)?.length > this.ellipsis + 1
    }
  },
  computed: {
    hasShowFunc() {
      return this.buttons.some(btn => typeof btn.show === "function")
    },
    defaultButtons() {
      return row => {
        return this.hasMore(row) ? this.showButtons(row).slice(0, this.ellipsis) : this.showButtons(row)
      }
    },
    moreButtons() {
      return row => {
        return this.hasMore(row) ? this.showButtons(row).slice(this.ellipsis) : []
      }
    },
    computeWidth() {
      let length = this.hasShowFunc ? this.ellipsis : this.defaultButtons().length
      let buttonsWidth = 20 + length * 38 + 38
      if (this.minWidth) {
        buttonsWidth = buttonsWidth < this.minWidth ? this.minWidth : buttonsWidth
      }
      return this.width ? this.width : buttonsWidth
    },
    disableButton() {
      return (btn, row) => {
        return typeof btn.disabled === "function" ? btn.disabled(row) : btn.disabled
      }
    }
  }
}
</script>
