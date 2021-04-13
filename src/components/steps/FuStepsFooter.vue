<script>
import ConfigSize from "@/mixins/config-size";
export default {
  name: "FuStepsFooter",
  mixins: [ConfigSize],
  inject: ["stepper"],
  computed: {
    isFirst() {
      return this.stepper.isFirst(this.stepper.index);
    },
    isLast() {
      return this.stepper.isLast(this.stepper.index);
    },
    showCancel() {
      return this.stepper.showCancel !== false;
    },
  },
  methods: {
    click(fnName) {
      this.stepper[fnName]
        ? this.stepper[fnName]()
        : this.$emit("stepperFn", fnName);
    },
  },
  render() {
    const button = (value) => {
      return (
        <el-button
          size={this.stepper.buttonSize || this.configSize}
          vOn:click={() => this.click(value)}>
          {this.stepper[`${value}ButtonText`]}
        </el-button>
      );
    };
    return (
      <div class="fu-steps__footer--flex">
        <div class="fu-steps__footer--left">
          {this.showCancel && button("cancel")}
        </div>
        <div class="fu-steps__footer--right">
          {!this.isFirst && button("prev")}
          {this.isLast ? button("finish") : button("next")}
        </div>
      </div>
    );
  },
};
</script>
