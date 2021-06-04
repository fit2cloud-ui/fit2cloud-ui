<template>
  <el-tabs class="fu-Tabs" :before-leave="beforeLeave" :addable="addable" :editable="editable"
    v-on="$listeners" v-bind="$attrs">
    <slot></slot>
    <el-tab-pane name="add" key="add" v-if="addible">
      <template v-slot:label>
        <slot name="add">
          <!-- 下拉方式 -->
          <el-dropdown @command="handleCommand" v-if="fuAddType==='dropdown'" :trigger="fuAddTrigger">
            <slot name="dropdownIcon">
              <el-button type="primary" plain icon="el-icon-plus" size="mini" />
            </slot>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, i) in dropdownMenus" :key="i" :icon="item.icon"
                :disabled="item.disabled" :divided="item.divided" :command="item.command">
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 默认 -->
          <el-button v-else @click="handleCommand" type="primary" plain icon="el-icon-plus"
            size="mini" />
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
    fuAddable: Boolean,
    fuAddType: {
      type: String,
      default: "default",
      validator: (val) => ["default", "dropdown"].includes(val),
    },
    dropdownMenus: {
      type: Array,
      default: () => [],
    },
    fuAddTrigger: {
      type: String,
      default: "hover",
      validator: (val) => ["hover", "click"].includes(val),
    },
    addable: Boolean,
    editable: Boolean,
  },
  data() {
    return {
      currentIndex: 1,
    };
  },
  watch: {},
  computed: {
    addible() {
      return this.fuAddable && !this.addable && !this.editable;
    },
  },
  created() {},
  methods: {
    handleCommand(e) {
      const name = uuid();
      let obj = null
      if (e) {
        obj = this.dropdownMenus.find((item) => item.command === e);
      }
      this.$emit("command", name, obj);
    },

    /* 活动标签切换时触发 */
    beforeLeave(currentName, oldName) {
      // 如果name是add，则什么都不触发
      if (currentName == "add") {
        return false;
      }
    },
  },
};
</script>
