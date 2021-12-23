<template>
  <div>
    <el-radio-group v-model="showType" style="margin-bottom: 20px" size="small">
      <el-radio-button label="always">always</el-radio-button>
      <el-radio-button label="hover">hover</el-radio-button>
      <el-radio-button label="selected">selected</el-radio-button>
    </el-radio-group>
    <fu-table :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection"/>
      <fu-table-column-dropdown :menus="menus" :title="`已选中${selectRows.length}项`" :showType="showType"/>
      <el-table-column prop="date" label="日期" min-width="180"/>
      <el-table-column prop="name" label="姓名" min-width="180"/>
      <el-table-column prop="address" label="地址" min-width="300"/>
    </fu-table>
  </div>
</template>

<script>
export default {
  name: "ColumnDropdownDemo",
  data() {
    return {
      selectRows: [],
      showType: "always",
      tableData: [
        {
          id: 1,
          date: "2016-05-01",
          name: "张三",
          address: "北京朝阳区财富中心 0室",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "张三",
          address: "北京朝阳区财富中心 1室",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "张三",
          address: "北京朝阳区财富中心 2室",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "张三",
          address: "北京朝阳区财富中心 3室",
        },
      ],
      menus: [
        {
          label: "批量编辑",
          icon: "el-icon-view",
          click: (row) => {
            console.log("编辑:" + row.name);
          },
        },
        {
          label: "批量移动",
          icon: "el-icon-rank",
          click: (row) => {
            console.log("移动:" + row.name);
          },
          disabled: (row) => {
            if (row.id === 1) {
              return true;
            }
          },
        },
        {
          label: "批量删除",
          icon: "el-icon-delete",
          click: (row) => {
            console.log("删除:" + row.name);
          },
          divided: true,
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(value) {
      this.selectRows = value;
    },
  },
};
</script>
