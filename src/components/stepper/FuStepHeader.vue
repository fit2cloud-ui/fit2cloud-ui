<template>
  <div class="el-step" :style="style" :class="[
      !isSimple && `is-${fuSteps.direction}`,
      isSimple && 'is-simple',
      isLast && !space && !isCenter && 'is-flex',
      isCenter && !isVertical && !isSimple && 'is-center',
      isDisable && 'fu-is-disable'
     ]" @click="handleClick($event)">
    <!-- icon & line -->
    <div class="el-step__head" :class="`is-${currentStatus}`">
      <div v-if="!isVertical" class="el-step__line"
        :style="isLast ? '' : { marginRight: fuSteps.stepOffset + 'px' }">
        <i class="el-step__line-inner" :style="lineStyle"></i>
      </div>

      <div class="el-step__icon" :class="`is-${data&&data.icon ? 'icon' : 'text'}`">
        <slot v-if="currentStatus !== 'success' && currentStatus !== 'error'" name="icon">
          <i v-if="data&&data.icon" class="el-step__icon-inner" :class="[data&&data.icon]"></i>
          <div class="el-step__icon-inner" v-if="!(data&&data.icon) && !isSimple">{{ index + 1 }}
          </div>
        </slot>
        <i v-else :class="['el-icon-' + (currentStatus === 'success' ? 'check' : 'close')]"
          class="el-step__icon-inner is-status">
        </i>
      </div>
    </div>
    <!-- title & description -->
    <div class="el-step__main">
      <div class="el-step__title" ref="title" :class="['is-' + currentStatus]">
        <slot name="title">{{ data&&data.title }}</slot>
      </div>
      <div v-if="isSimple" class="el-step__arrow"></div>
      <div v-else class="el-step__description" :class="['is-' + currentStatus]">
        <slot name="description">{{ data&&data.description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FuStepHeader",

  props: {
    index: Number,
    disable: Boolean,
  },
  inject: ["fuSteps"],
  data() {
    return {
      lineStyle: {},
      internalStatus: "",
    };
  },
  computed: {
    data() {
      return this["fuSteps"].steps[this.index];
    },
    isDisable() {
      return this["fuSteps"].historyActive < this.index;
    },
    currentStatus() {
      return (this.data && this.data.status) || this.internalStatus;
    },
    prevStatus() {
      const prevStep = this["fuSteps"].steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : "wait";
    },
    isCenter() {
      return this["fuSteps"].alignCenter;
    },
    isVertical() {
      return this["fuSteps"].direction === "vertical";
    },
    isSimple() {
      return this["fuSteps"].simple;
    },
    isLast() {
      const parent = this["fuSteps"];
      const isThis = this["fuSteps"].steps[this.index];
      return parent.steps[parent.steps.length - 1] === isThis;
    },
    stepsCount() {
      return this["fuSteps"].steps.length;
    },
    space() {
      const {
        isSimple,
        fuSteps: { space },
      } = this;
      return isSimple ? "" : space;
    },
    style: function () {
      const style = {};
      const parent = this["fuSteps"];
      const len = parent.steps.length;

      const space =
        typeof this.space === "number"
          ? this.space + "px"
          : this.space
          ? this.space
          : 100 / (len - (this.isCenter ? 0 : 1)) + "%";
      style.flexBasis = space;
      if (this.isVertical) return style;
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + "%";
      } else {
        style.marginRight = -this["fuSteps"].stepOffset + "px";
      }

      return style;
    },
  },

  methods: {
    handleClick(e) {
      if (this.isDisable) {
        e.preventDefault();
      } else {
        this["fuSteps"].updateActiveHandle(this.index);
      }
    },
    updateStatus(val) {
      const prevChild = this["fuSteps"].steps[this.index - 1];
      if (val > this.index) {
        this.internalStatus = this["fuSteps"].finishStatus;
      } else if (val === this.index && this.prevStatus !== "error") {
        this.internalStatus = this["fuSteps"].processStatus;
      } else {
        this.internalStatus = "wait";
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
  },

  mounted() {
    this.$watch("fuSteps.active", this.updateStatus, { immediate: true });
    this.$watch(
      "fuSteps.processStatus",
      () => {
        const activeIndex = this["fuSteps"].active;
        this.updateStatus(activeIndex);
      },
      { immediate: true }
    );
    const unwatch = this.$watch("index", (val) => {
      this.$watch("fuSteps.active", this.updateStatus, { immediate: true });
      this.$watch(
        "fuSteps.processStatus",
        () => {
          const activeIndex = this["fuSteps"].active;
          this.updateStatus(activeIndex);
        },
        { immediate: true }
      );
      unwatch();
    });
  },
};
</script>
