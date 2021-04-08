<template>
  <div>
    <fu-steps ref="steps" finish-status="success" @change="handleChange">
      <fu-step id="cluster" title="第1步">
        <div class="example">
          <h1>Step 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
            quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
            tempore, dolores voluptas dolore placeat nulla.</p>
        </div>
      </fu-step>
      <fu-step id="network" title="第2步">
        <div class="example">
          <h1>Step 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
            quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
            tempore, dolores voluptas dolore placeat nulla.</p>
        </div>
      </fu-step>
      <fu-step id="storage" title="完成">
        <div class="example">
          <h1>完成</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
            quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
            tempore, dolores voluptas dolore placeat nulla.</p>
        </div>
      </fu-step>
      <template v-slot:footer>
        <div class="footer">
          <el-button type="primary" @click="prev" v-if="nowIndex!==0">上一步</el-button>
          <el-button type="primary" v-if="nowId==='storage'">提交</el-button>
          <el-button type="primary" @click="next" v-else>下一步</el-button>
        </div>
      </template>
    </fu-steps>
  </div>
</template>

<script>
export default {
  name: "CustomFooterDemo",
  data() {
    return {
      nowId: null,
      nowIndex: 0
    };
  },
  methods: {
    next() {
      this.$refs.steps.next();
    },
    prev() {
      this.$refs.steps.prev();
    },
    handleChange({ id, title, index }){
      this.nowId = id
      this.nowIndex = index
    }
  },
};
</script>
<style lang="scss" scoped>
.example {
  height: 200px;
}
.footer {
  text-align: right;
}
</style>
