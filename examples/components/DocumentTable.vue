<template>
  <div class="document-table">
    <el-tooltip content="代码说明"
                placement="left">
      <el-button @click="drawer = true"
                 class="attributesButton"
                 icon="el-icon-reading"
                 circle></el-button>
    </el-tooltip>
    <el-drawer :visible.sync="drawer"
               direction="rtl"
               size="60%">
      <div class="drawer-container">
        <div class="table"
             v-for="(item, index) in data"
             :key="index">
          <!-- <el-scrollbar> -->
          <h1>{{ item.name || 'Attributes'}}</h1>
          <el-table :data="item.table"
                    style="width: 100%"
                    border
                    header-row-class-name="attr-table-th">
            <template>
              <el-table-column v-for="(value,key) in item.header"
                               :key="key"
                               :prop="key"
                               :label="value">
                <template slot-scope="scope">{{
                  scope.row[key]
                }}</template>
              </el-table-column>
            </template>
          </el-table>
        </div>
        <!-- </el-scrollbar> -->
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "DocumentTable",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  watch: {},
  data () {
    return {
      drawer: false,
      height: 0,
    };
  },
  computed: {},
  methods: {},
  created () { },
  mounted () {
    // this.height = document.documentElement.clientHeight - 100;
  },
};
</script>
<style scoped lang="scss">
.attributesButton {
  position: fixed;
  margin-left: 800px;
  // right: 0;
  // top: 0;
  z-index: 5;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.el-icon-s-flag {
  color: #409eff;
}
/deep/.el-drawer__header {
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
}
/deep/.attr-table-th th {
  background: #f5f7fa;
}
@media (max-width: 1140px) {
  .attributesButton {
    right: 0;
  }
}
</style>
