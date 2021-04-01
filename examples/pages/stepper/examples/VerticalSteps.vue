<template>
  <div>
    <fu-steps direction="vertical" ref="steps" finish-status="success">
      <fu-step id="cluster" title="集群" :before-next="beforeNext">
        <div class="example" :style="{background:'#e7faf0'}">1</div>
      </fu-step>
      <fu-step id="network" title="网络" description="这是一段很长很长很长的描述性文字">
        <div class="example">2</div>
      </fu-step>
      <fu-step id="storage" title="存储">
        <div class="example" :style="{background:'#ff8787'}">3</div>
      </fu-step>
    </fu-steps>
  </div>
</template>

<script>
export default {
  name: "VerticalSteps",
  data() {
    return {
      validateCluster: false,
    };
  },
  methods: {
    beforeNext({ id, title, index }) {
      if (id === "cluster") {
        // 校验成功
        if (this.validateCluster !== true) {
          // 异步校验，5秒后校验通过
          setTimeout(() => {
            this.validateCluster = true;
            // 重新触发beforeNext，但是validateCluster已经为true
            this.$refs.steps.next();
          }, 5000);
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
