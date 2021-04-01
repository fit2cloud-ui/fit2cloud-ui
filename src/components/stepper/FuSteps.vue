<script>
import FuStepFooter from "./FuStepFooter";
import FuStepHeader from "./FuStepHeader";
import Migrating from "element-ui/src/mixins/migrating";

export default {
  name: "FuSteps",
  mixins: [Migrating],
  components: {
    FuStepHeader,
    FuStepFooter,
  },
  props: {
    space: [Number, String],
    // active: Number,
    direction: {
      type: String,
      default: "horizontal",
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: "finish",
    },
    processStatus: {
      type: String,
      default: "process",
    },
    clickable: Boolean,
  },
  provide() {
    return { fuSteps: this };
  },
  computed: {
    isVertical() {
      return this.direction === "vertical";
    },
    containerStyles() {
      return {
        transform:
          !this.isVertical && `translate3D(${-this.active * 100}%, 0, 0)`,
      };
    },
  },
  data() {
    return {
      steps: [],
      stepOffset: 0,
      active: 0,
      loading: false,
      historyActive: 0,
    };
  },
  methods: {
    updateActiveHandle(val) {
      const newActive = this.steps[val];
      const newObj = {
        id: newActive.id,
        title: newActive.title,
        index: val,
      };
      if (this.checking(val)) {
        this.active = val;
        if (val > this.historyActive) {
          this.historyActive = val;
        }
        this.$emit("active", newObj);
        this.loading = false;
      } else {
        return;
      }
    },
    cancel(e) {
      this.$emit("close", e);
    },
    finish(e) {
      this.$emit("finish", e);
    },
    next() {
      this.updateActiveHandle(this.active + 1);
    },
    prev() {
      this.updateActiveHandle(this.active - 1);
    },
    checking(val) {
      const newActive = this.steps[val];
      // const newObj = {
      //   id: newActive.id,
      //   title: newActive.title,
      //   index: val,
      // };
      const oldActive = this.steps[this.active];
      const oldObj = {
        id: oldActive.id,
        title: oldActive.title,
        index: this.active,
      };
      // 激活前 离开前
      if (this.active != val) {
        if (this.active < val && oldActive.beforeNext) {
          const beforeNext = oldActive.beforeNext(oldObj);
          if (beforeNext === false) {
            this.loading = true;
            return false;
          } else {
            return true;
          }
        } else if (this.active > val && oldActive.beforePrev) {
          const beforePrev = oldActive.beforePrev(oldObj);
          if (beforePrev === false) {
            this.loading = true;
            return false;
          } else {
            return true;
          }
        } else if (newActive.beforeActive) {
          const beforeActive = newActive.beforeActive(oldObj);
          if (beforeActive === false) {
            this.loading = true;
            return false;
          } else {
            return true;
          }
        } else if (oldActive.beforeLeave) {
          const beforeLeave = oldActive.beforeLeave(oldObj);
          if (beforeLeave === false) {
            this.loading = true;
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      }
    },
  },
  watch: {
    // active(newVal, oldVal) {
    //   this.$emit("change", newVal, oldVal);
    // },
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    },
  },
  render(h) {
    const header = (
      <div
        class={{
          "fu-steps__horizontal-header": true,
          "el-steps--simple": this.simple,
        }}
      >
        {this._l(this.steps, (item, index) => (
          <fu-step-header key={index} index={index} />
        ))}
      </div>
    );
    return (
      <div
        class={{
          "fu-steps": true,
          [`el-steps--${this.direction}`]: !this.simple,
        }}
      >
        {this.direction === "horizontal" && header}
        {!this.isVertical ? (
          <div class="fu-steps__horizontal-wrapper">
            <div
              class="fu-steps__horizontal-container"
              style={this.containerStyles}
            >
              {this.$slots.default}
            </div>
          </div>
        ) : (
          this.$slots.default
        )}
        <fu-step-footer/>
      </div>
    );
  },
};
</script>
