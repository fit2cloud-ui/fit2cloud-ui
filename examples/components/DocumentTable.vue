<template>
  <div>
    <h3>{{ title || type}}</h3>
    <el-table
        :data="data"
        style="width: 100%">
      <template v-if="type === 'Attributes'">
        <el-table-column
            prop="prop"
            label="参数"
            width="170">
          <template slot-scope="scope">
            {{ scope.row.prop }}
            <el-tooltip v-if="scope.row.config" effect="dark" content="此参数未配置默认使用全局联动配置项" placement="top-start">
              <a class="el-icon-s-flag"></a>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
            prop="desc"
            label="说明">
        </el-table-column>
        <el-table-column
            prop="type"
            label="类型"
            width="150">
        </el-table-column>
        <el-table-column
            prop="enum"
            label="可选值">
        </el-table-column>
        <el-table-column
            prop="default"
            label="默认值"
            width="100">
        </el-table-column>
      </template>
      <template v-if="type === 'Events'">
        <el-table-column
            prop="prop"
            label="事件名称"
            width="170">
        </el-table-column>
        <el-table-column
            prop="desc"
            label="说明">
        </el-table-column>
        <el-table-column
            prop="callback"
            label="回调参数"
            width="150">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'DocumentTable',
    components: {},
    props: {
      title: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'Attributes',
        validator: v => ['Attributes', 'Events'].includes(v),
      },
      data: {
        type: Array,
        default: () => [],
      },
    },
    watch: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
<style scoped>
  .el-icon-s-flag {
    color: #409eff;
  }
</style>