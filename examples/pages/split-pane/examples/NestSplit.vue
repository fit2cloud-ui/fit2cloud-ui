<template>
  <div class="demo-split">
    <fu-split-pane left="200" direction="horizontal">
      <div slot="left" class="demo-split-child">
        <fu-split-pane top="50%" direction="vertical">
          <div slot="top">
            Top
          </div>
          <div slot="bottom">
            Bottom
          </div>
        </fu-split-pane>
      </div>
      <div slot="right">
        Right
      </div>
    </fu-split-pane>
  </div>
</template>

<script>
export default {
  name: "BaseSplit",
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-child {
  height: 200px;
}
</style>
