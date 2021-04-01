<script>
import FuStepFooter from "./FuStepFooter";
import FuStepHeader from "./FuStepHeader";
export default {
  name: "FuStep",
  components: {
    FuStepHeader,
    FuStepFooter,
  },
  props: {
    id: String,
    title: String,
    icon: String,
    description: String,
    status: String,
    disable: Boolean,
    beforeActive: Function,
    beforeLeave: Function,
    beforeNext: Function,
    beforePrev: Function,
  },
  computed: {
    isActive() {
      return this.$parent.active === this.index;
    },
    isVertical() {
      return this.$parent.direction === "vertical";
    },
    loading(){
      return this.$parent.loading
    }
  },

  data() {
    return {
      index: -1,
    };
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  },

  beforeDestroy() {
    const steps = this.$parent.steps;
    const index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },

  methods: {
    // FuStepHeader组件需要调用
    calcProgress(status) {
      let step = 100;
      const style = {};

      style.transitionDelay = 150 * this.index + "ms";
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== "error" ? 0 : 0;
      } else if (status === "wait") {
        step = 0;
        style.transitionDelay = -150 * this.index + "ms";
      }

      style.borderWidth = step && !this.isSimple ? "1px" : 0;
      this.$parent.direction === "vertical"
        ? (style.height = step + "%")
        : (style.width = step + "%");

      this.lineStyle = style;
    },
  },
  render(h) {
    const parent = this.$parent;
    const content = this.isActive && (
      <div
        v-loading={this.loading}
        class={{ "fu-step__content": true, "fu-is-actived": this.isActive }}>
        {this.$slots.default}
        {parent.footer}
        <fu-step-footer index={this.index} />
      </div>
    );
    return (
      <div
        class={{
          "fu-step": true,
          [`fu-is-${parent.direction}`]: !parent.simple,
        }}>
        {this.isVertical && <fu-step-header index={this.index} />}
        {this.isVertical ? (
          <el-collapse-transition>{content}</el-collapse-transition>
        ) : (
          content
        )}
      </div>
    );
  },
};
</script>
