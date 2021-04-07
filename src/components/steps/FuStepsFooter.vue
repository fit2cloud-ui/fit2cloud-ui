<script>
export default {
  name: "FuStepsFooter",
  props: {
    parent: Object,
  },
  computed: {
    isFirst() {
      return this.parent.isFirst(this.parent.index);
    },
    isLast() {
      return this.parent.isLast(this.parent.index);
    },
  },
  methods: {
    click(fnName) {
      this.$emit("stepperFn", fnName);
    },
  },
  render(h) {
    const button = (value) => {
      return (
        <el-button
          size={this.parent.buttonSize}
          vOn:click={() => this.click(value)}>
          {this.parent[`${value}ButtonText`]}
        </el-button>
      );
    };
    return (
      <div class="fu-steps__footer--flex">
        <div class="fu-steps__footer--left">{button("cancel")}</div>
        <div class="fu-steps__footer--right">
          {!this.isFirst && button("prev")}
          {this.isLast ? button("confirm") : button("next")}
        </div>
      </div>
    );
  },
};
</script>
