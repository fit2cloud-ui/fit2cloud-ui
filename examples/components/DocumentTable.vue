<template>
  <div>
    <el-button
      @click="drawer = true"
      class="attributesButton"
      icon="el-icon-reading"
      circle
    ></el-button>
    <el-drawer
      title="Attributes"
      :visible.sync="drawer"
      direction="rtl"
      size="60%"
    >
      <div class="table">
        <el-table :data="data" style="width: 100%" :height="height">
          <template>
            <el-table-column prop="prop" label="参数" width="170">
              <template slot-scope="scope">
                {{ scope.row.prop }}
                <el-tooltip
                  v-if="scope.row.config"
                  effect="dark"
                  content="此参数未配置默认使用全局联动配置项"
                  placement="top-start"
                >
                  <a class="el-icon-s-flag"></a>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="desc" label="说明"> </el-table-column>
            <el-table-column prop="type" label="类型" width="150">
            </el-table-column>
            <el-table-column prop="enum" label="可选值"> </el-table-column>
            <el-table-column prop="default" label="默认值" width="100">
            </el-table-column>
          </template>
        </el-table>
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
  data() {
    return {
      drawer: false,
      height: 0,
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.height = document.documentElement.clientHeight - 100;
  },
};
</script>
<style scoped lang="scss">
.table {
  padding: 15px;
}
.attributesButton {
  position: fixed;
  right: 120px;
  top: 100px;
  z-index: 5;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
}
.el-icon-s-flag {
  color: #409eff;
}
/deep/.el-drawer__header {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
}
</style>