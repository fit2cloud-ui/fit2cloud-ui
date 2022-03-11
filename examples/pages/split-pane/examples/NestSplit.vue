<template>
  <div class="demo-split">
    <fu-split-pane left="200" direction="horizontal">
      <template v-slot:left>
        <div class="demo-split-child">
          <fu-split-pane top="50%" direction="vertical">
            <template v-slot:top>
              Top
            </template>
            <template v-slot:bottom>
              Bottom
            </template>
          </fu-split-pane>
        </div>
      </template>
      <template v-slot:right>
        Right
      </template>
    </fu-split-pane>
  </div>
</template>

<script>
export default {
  name: "BaseSplit",
  data() {
    return {};
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
