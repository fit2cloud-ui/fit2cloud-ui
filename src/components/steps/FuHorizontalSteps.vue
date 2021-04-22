<script>
import FuHorizontalNavigation from "./FuHorizontalNavigation";
import FuStepsFooter from "./FuStepsFooter";
import { Step, Stepper } from "./Stepper";

export default {
  name: "FuHorizontalSteps",
  components: { FuHorizontalNavigation, FuStepsFooter },
  data() {
    return {
      stepper: new Stepper(),
    };
  },
  created() {
    this.stepper.activeSet.add(0);
  },
  provide() {
    return {
      stepper: this.stepper,
    };
  },
  watch: {
    "stepper.index"(value) {
      this.$emit("change", this.stepper.steps[value]);
    },
  },
  computed: {
    heightStyle() {
      return {
        height: parseInt(this.stepper?.height) + "px" || "auto",
      };
    },
  },
  render(h) {
    // let currentNode;
    let steps = [];
    if (this.$slots.default) {
      this.$slots.default.forEach((node, index) => {
        const options = {
          index: index,
          ...node.data.attrs,
        };
        const step = new Step(options);
        steps.push(step);
        // if (this.stepper.isCurrent(index)) {
        //   currentNode = node;
        // }
      });
    }
    this.stepper.steps = steps;
    this.stepper = Object.assign(this.stepper, this.$attrs);
    return (
      <div class="fu-steps fu-steps--horizontal">
        <fu-horizontal-navigation
          stepper={this.stepper}
          steps={steps}
          disable={this.disable}
          vOn:active={this.active} />
        <div class="fu-steps__wrapper">
          <div class="fu-steps__container" style={this.heightStyle}>
            <transition name="carousel" mode="out-in">
              {this._l(
                this.$slots.default,
                (item, index) => this.stepper.index === index && item
              )}
            </transition>
          </div>
        </div>
        <div class="fu-steps__footer">
          {this.$slots.footer || <fu-steps-footer vOn:stepperFn={this.$func} />}
        </div>
      </div>
    );
  },

  methods: {
    active(index) {
      this.stepper.active(index);
    },
    next() {
      this.stepper.next();
    },
    prev() {
      this.stepper.prev();
    },
    disable(index) {
      return !this.stepper.isActive(index);
    },
    $func(name) {
      this.$emit(name);
    },
  },
};
</script>
