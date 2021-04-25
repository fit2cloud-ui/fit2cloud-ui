<template>
  <el-table-column class-name="fu-table-column-dropdown" width="40" :resizable="false"
    align="center" v-bind="$attrs" v-on="$listeners">
    <template slot-scope="scope">
      <el-dropdown @command="handleCommand" :class="showType === 'hover' ? 'fu-show-icon' : ''"
        v-if="isShow(scope.row)" placement="bottom" trigger="click" size="medium">
        <span class="el-dropdown-link">
          <slot name="icon">
            <i class="el-icon-more fu-icon-more" />
          </slot>
        </span>
        <el-dropdown-menu slot="dropdown">
          <slot name="title">
            <div class="fu-table-column-dropdown__title" v-if="title">
              {{ title }}
            </div>
          </slot>
          <slot>
            <el-dropdown-item v-for="(item, i) in menus" :key="i" :icon="item.icon"
              :disabled="disabled(item, scope.row)" :divided="item.divided"
              :command="composeValue(item, scope.row)">
              {{ item.label }}
            </el-dropdown-item>
          </slot>
        </el-dropdown-menu>
      </el-dropdown>
    </template>

  </el-table-column>
</template>

<script>
export default {
  name: "FuTableColumnDropdown",
  components: {},
  props: {
    showType: {
      type: String, // always/hover/selected
      default: "always",
    },
    menus: {
      type: Array,
      default: () => [],
    },
    title: String,
  },
  computed: {
    isShow() {
      return function (row) {
        if (this.showType === "selected") {
          return this.$parent?.selection.includes(row) && true;
        } else {
          return true;
        }
      };
    },
    disabled() {
      return function (item, row) {
        return typeof item.disabled === "function"
          ? item.disabled(row)
          : item.disabled;
      };
    },
  },
  methods: {
    handleCommand({ item, row }) {
      item.click(row);
    },
    composeValue(item, row) {
      return {
        item,
        row,
      };
    },
  },
};
</script>
