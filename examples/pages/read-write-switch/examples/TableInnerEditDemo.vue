<template>
  <div>
    <fu-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>

      <el-table-column prop="enable" label="语言(可行内编辑)">
        <template #default="{row}">
          <fu-select-rw-switch v-model="row.language">
            <template #read>
              <el-tag disable-transitions v-if="row.language === 'zh-CN'" type="danger">中文</el-tag>
              <el-tag disable-transitions v-else>English</el-tag>
            </template>
            <el-option key="zh-CN" label="中文" value="zh-CN"/>
            <el-option key="en-US" label="English" value="en-US"/>
          </fu-select-rw-switch>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="地址(可行内编辑)">
        <template #default="{row}">
          <fu-input-rw-switch v-model="row.address"></fu-input-rw-switch>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
    </fu-table>
  </div>
</template>

<script>
export default {
  name: "TableInnerEditDemo",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-01',
          name: '张三',
          language: "zh-CN",
          address: '北京朝阳区财富中心 1室'
        }, {
          date: '2016-05-02',
          name: '张三',
          language: "en-US",
          address: '北京朝阳区财富中心 2室'
        }, {
          date: '2016-05-03',
          name: '张三',
          language: "zh-CN",
          address: '北京朝阳区财富中心 3室'
        }, {
          date: '2016-05-04',
          name: '张三',
          language: "en-US",
          address: '北京朝阳区财富中心 4室'
        }, {
          date: '2016-05-05',
          name: '张三',
          language: "zh-CN",
          address: '北京朝阳区财富中心 5室'
        }
      ]
    }
  },
  methods: {
    blur(read) {
      setTimeout(() => {
        read()
      }, 100)
    }
  }
}
</script>
