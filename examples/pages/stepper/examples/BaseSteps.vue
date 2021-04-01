<template>
  <div>
    <fu-steps ref="steps" finish-status="success" @close="cancel" @finish="submit"
      @active="handleActive">
      <fu-step id="cluster" title="集群" :before-next="beforeNext">
        <div class="example" :style="{background:'#e7faf0'}">1</div>
      </fu-step>
      <fu-step id="network" title="网络" :before-active="beforeActive" :before-leave="beforeLeave"
        :before-prev="beforePrev" description="这是一段很长很长很长的描述性文字">
        <div class="example">2</div>
      </fu-step>
      <fu-step id="storage" title="存储">
        <div class="example" :style="{background:'#ff8787'}">3</div>
      </fu-step>
      <!-- <template v-slot:footer>
        <el-button type="primary">自定义</el-button>
      </template> -->
    </fu-steps>
  </div>
</template>

<script>
export default {
  name: "verticalSteps",
  data() {
    return {
      validateCluster: false,
    };
  },
  methods: {
    cancel() {
      console.log("取消");
    },
    submit() {
      console.log("完成");
    },
    handleActive({ id, title, index }) {
      console.log("handleActive" +  index);

    },
    beforePrev({ id, title, index }) {
      console.log("beforePrev" + index);
    },
    beforeLeave({ id, title, index }) {
      console.log("beforeLeave" + index);
      // return true;
    },
    beforeActive({ id, title, index }) {
      console.log("beforeActive" + index);
    },
    beforeNext({ id, title, index }) {
      console.log("beforeNext" + index);
      if (id === "cluster") {
        // 校验成功
        if (this.validateCluster !== true) {
          // 异步校验，5秒后校验通过
          setTimeout(() => {
            this.validateCluster = true;
            // 重新触发beforeNext，但是validateCluster已经为true
            this.$refs.steps.next();
          }, 3000);
          // 校验通过前先返回false
          console.log(id + "异步校验执行中，需要loading");
          return false;
        } else {
          console.log(id + " 异步校验通过");
          return true;
        }
      }
      if (id === "network") {
        console.log(title + " 异步校验通过");
        return true; // 同步校验, 返回true
      }
      if (id === "storage") {
        console.log(index + " 异步校验通过");
        // 同步校验, 返回undefined
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.example {
  background-color: #dfe4ed;
  height: 200px;
}
</style>
