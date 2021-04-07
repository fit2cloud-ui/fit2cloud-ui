<script>
export default {
  name: "FuStepsFooter",
  props: {
    parent: Object,
  },
  methods: {
    click(fnName) {
      this.$emit("stepperFn", fnName);
    },
  },
  render(h) {
    const button = (value) => {
      return (
        <el-button vOn:click={() => this.click(value)}>
          {this.parent[`${value}ButtonText`]}
        </el-button>
      );
    };
    return (
      <div class="fu-steps__footer">
        <div class="fu-steps__footer--left">{button("cancel")}</div>
        <div class="fu-steps__footer--right">
          {!this.parent.isFirst(this.parent.index) && button("prev")}
          {this.parent.isLast(this.parent.index)
            ? button("confirm")
            : button("next")}
        </div>
      </div>
    );
  },
};
</script>
