<template>
  <el-tabs class="fu-tabs" :before-leave="beforeLeave" :editable="false" :addable="false"
    v-on="$listeners" v-bind="$attrs">
    <slot></slot>
    <el-tab-pane name="add" key="add" v-if="addable">
      <template v-slot:label>
        <slot name="add">
          <!-- 下拉方式 -->
          <el-dropdown @command="handleCommand" v-if="addType==='dropdown'" :trigger="addTrigger">
            <slot name="dropdownButton">
              <el-button type="primary" plain :icon="addIcon" size="mini">
                <template v-if="addButtonLabel">{{addButtonLabel}}</template>
              </el-button>
            </slot>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, i) in dropdownMenus" :key="i" :icon="item.icon"
                :disabled="item.disabled" :divided="item.divided" :command="item.command">
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 默认 -->
          <el-button v-else @click="handleCommand" type="primary" plain :icon="addIcon" size="mini">
            <template v-if="addButtonLabel">{{addButtonLabel}}</template>
          </el-button>
        </slot>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { uuid } from "@/tools/utils";
export default {
  name: "FuTabs",
  props: {
    addType: {
      type: String,
      default: "default",
      validator: (val) => ["default", "dropdown"].includes(val),
    },
    dropdownMenus: {
      type: Array,
      default: () => [],
    },
    addTrigger: {
      type: String,
      default: "hover",
      validator: (val) => ["hover", "click"].includes(val),
    },
    addIcon: {
      type: String,
      default: "el-icon-plus",
    },
    addButtonLabel: String,
    addable: Boolean,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    handleCommand(e) {
      const name = uuid();
      let obj = null;
      if (e) {
        obj = this.dropdownMenus.find((item) => item.command === e);
      }
      this.$emit("command", name, obj);
    },

    /* 活动标签切换时触发 */
    beforeLeave(currentName, oldName) {
      // 如果name是add，则什么都不触发
      if (currentName === "add") {
        return false;
      }
    },
  },
};
</script>
