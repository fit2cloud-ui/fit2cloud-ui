<script>
import ConfigSize from "@/mixins/config-size";
export default {
  name: "FuStepsFooter",
  mixins: [ConfigSize],
  inject: ["stepper"],
  data() {
    return {
      disabledButton: false,
    };
  },
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
    disabled() {
      return this.stepper?.isLoading || this.disabledButton;
    },
  },
  methods: {
    click(fnName) {
      this.stepper[fnName]
        ? this.stepper[fnName]()
        : this.$emit("stepperFn", fnName);
      this.disabledButton = true;
      setTimeout(() => {
        this.disabledButton = false;
      }, 500);
    },
  },
  render() {
    const button = (value) => {
      return (
        <el-button
          disabled={this.disabled}
          size={this.stepper.buttonSize || this.configSize}
          vOn:click={() => this.click(value)}>
          {this.stepper[`${value}ButtonText`]}
        </el-button>
      );
    };
    return (
      <div class={`fu-steps__footer--${this.stepper.footerAlign}`}>
        <div class="fu-steps__footer--block" style="margin-right:10px">
          {this.showCancel && button("cancel")}
        </div>
        <div class="fu-steps__footer--block">
          {!this.isFirst && button("prev")}
          {this.isLast ? button("finish") : button("next")}
        </div>
      </div>
    );
  },
};
</script>
