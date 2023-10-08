<template>
  <div class="document-table">
    <el-tooltip content="属性说明" placement="left">
      <el-button @click="drawer = true" class="attributesButton" icon="el-icon-reading" circle>
      </el-button>
    </el-tooltip>
    <el-drawer :visible.sync="drawer" direction="rtl" size="60%">
      <div class="drawer-container">
        <div class="table" v-for="(item, index) in data" :key="index">
          <h1>{{ item.name || 'Attributes' }}</h1>
          <div v-if="item.children&&item.children.length>0">
            <div v-for="(child, i) in item.children" :key="i">
              <h4>{{ child.name || 'Attributes' }}</h4>
              <el-table :data="child.table" style="width: 100%" border
                        header-row-class-name="attr-table-th">
                <el-table-column v-for="(value,key) in child.header" :key="key" :prop="key"
                                 :label="value">
                  <template v-slot="scope">{{ scope.row[key] }}</template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <el-table v-else :data="item.table" style="width: 100%" border
                    header-row-class-name="attr-table-th">
            <el-table-column v-for="(value,key) in item.header" :key="key" :prop="key"
                             :label="value">
              <template v-slot="scope">{{ scope.row[key] }}</template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: 'DocumentTable',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      drawer: false,
      height: 0,
    };
  },
};
</script>
<style scoped lang="scss">
.attributesButton {
  position: fixed;
  margin-left: 840px;
  z-index: 5;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}

.el-icon-s-flag {
  color: #409eff;
}

::v-deep.el-drawer__header {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
}

.drawer-container {
  height: calc(100vh - 55px);
  overflow: auto;
  padding: 0 20px;
}

.table {
  margin-bottom: 40px;

  h4 {
    font-size: 18px;
    color: #999999;
  }
}

::v-deep.attr-table-th th {
  background: #f5f7fa;
}
</style>
