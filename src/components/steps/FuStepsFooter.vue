<script>
export default {
  name: "FuStepsFooter",
  props: {
    parent: Object,
  },
  methods: {
    click(fnName) {
      this.$emit('stepperFn',fnName)
    },
  },
  render(h) {
    return (
      <div class="fu-steps__footer">
        <div class="fu-steps__footer--left">
          <el-button vOn:click={()=>this.click('cancel')}>Cancel</el-button>
        </div>
        <div class="fu-steps__footer--right">
          {!this.parent.isFirst(this.parent.index) && (
            <el-button vOn:click={()=>this.click('prev')}>Prev</el-button>
          )}
          {this.parent.isLast(this.parent.index) ? (
            <el-button vOn:click={()=>this.click('finish')}>OK</el-button>
          ) : (
            <el-button vOn:click={()=>this.click('next')}>Next</el-button>
          )}
        </div>
      </div>
    );
  },
};
</script>
