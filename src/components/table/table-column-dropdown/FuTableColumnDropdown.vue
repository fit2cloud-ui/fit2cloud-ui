<template>
  <el-table-column class-name="fu-table-column-dropdown" width="40" :resizable="false"
    align="center" v-bind="$attrs" v-on="$listeners">
    <template slot-scope="scope">
      <el-dropdown @command="handleCommand" :class="show === 'hover' ? 'fu-show-icon' : ''"
        v-if="isShow(scope.row)" placement="bottom" trigger="click" size="medium">
        <span class="el-dropdown-link">
          <i class="el-icon-more fu-icon-more" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <slot>
            <el-dropdown-item v-for="(item, i) in menus" :key="i" :icon="item.icon"
              :disabled="item.disabled" :divided="item.divided"
              :command="composeValue(item,scope.row)">
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
    show: {
      type: String, // always/hover/selected
      default: "always",
    },
    menus: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isShow() {
      return function (row) {
        if (this.show === "selected") {
          return this.$parent?.selection.includes(row) && true;
        } else {
          return this.show === "always" && true;
        }
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
