<template>
  <div>
    <fu-tabs v-model="editableTabsValue" fu-addable fuAddType="dropdown" :dropdownMenus="menus"
      @command="handleCommand" @tab-remove="removeTab">
      <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title"
        :name="item.name" closable>
        {{item.content}}
      </el-tab-pane>
    </fu-tabs>
  </div>
</template>

<script>
export default {
  name: "AddCloseTab",
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          name: "1",
          title: "Tab 1",
          content: "Tab 1 content",
        },
      ],
      menus: [
        {
          command: "debug",
          label: "快捷调试",
        },
        {
          command: "ADD",
          label: "创建接口",
        },
        {
          command: "CLOSE_ALL",
          label: "关闭所有标签",
        },
      ],
    };
  },
  methods: {
    handleCommand(name, obj) {
      if (obj.command === "CLOSE_ALL") {
        this.editableTabs = [];
        this.editableTabsValue = "";
      } else {
        this.editableTabs.push({
          name: name,
          title: obj.label,
          content: `${obj.label} content`,
          closable: true,
        });
        this.editableTabsValue = name;
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
