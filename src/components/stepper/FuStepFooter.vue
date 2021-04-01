<script>
import FuStepButton from "./FuStepButton";
export default {
  name: "FuStepFooter",
  components: {
    FuStepButton,
  },
  inject: ["fuSteps"],
  data() {
    return {};
  },
  computed: {
    isFirst() {
      const parent = this["fuSteps"];
      const isThis = this["fuSteps"].steps[this["fuSteps"].active];
      return parent.steps[0] === isThis;
    },
    isLast() {
      const parent = this["fuSteps"];
      const isThis = this["fuSteps"].steps[this["fuSteps"].active];
      return parent.steps[parent.steps.length - 1] === isThis;
    },
  },

  methods: {
    cancel(e) {
      this["fuSteps"].cancel(e);
    },
    prev() {
      this["fuSteps"].prev();
    },
    next() {
      this["fuSteps"].next();
    },
    finish(e) {
      this["fuSteps"].finish(e);
    },
  },

  mounted() {},
  render(createElement) {
    return (
      <div class="fu-step-footer">
        <fu-Step-button nativeOn-click={($event) => this.cancel($event)}>
          取消
        </fu-Step-button>
        <div class="footer-right">
          {!this.isFirst && (
            <fu-Step-button nativeOn-click={() => this.prev()}>
              上一步
            </fu-Step-button>
          )}
          {!this.isLast && (
            <fu-Step-button nativeOn-click={() => this.next()}>
              下一步
            </fu-Step-button>
          )}
          {this.isLast && (
            <fu-Step-button nativeOn-click={($event) => this.finish($event)}>
              完成
            </fu-Step-button>
          )}
          {this.$slots.footer}
        </div>
      </div>
    );
  },
};
</script>
