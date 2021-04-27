<template>
  <div>
    <fu-steps ref="steps" finish-status="success" height="200" @cancel="cancel" @finish="submit" showCancel>
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
    </fu-steps>
  </div>
</template>

<script>
export default {
  name: "BaseSteps",
  data() {
    return {
    };
  },
  methods: {
    cancel() {
      alert("取消");
    },
    submit() {
      alert("完成");
    },
  },
};
</script>
<style lang="scss" scoped>
.example {
  margin: 0 5%;
}
</style>
