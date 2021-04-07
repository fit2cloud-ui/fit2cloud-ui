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
  render(h) {
    let currentNode;
    let steps = [];
    if (this.$slots.default) {
      this.$slots.default.forEach((node, index) => {
        const options = {
          index: index,
          ...node.data.attrs,
        };
        const step = new Step(options);
        steps.push(step);
        if (this.stepper.isCurrent(index)) {
          currentNode = node;
        }
      });
    }
    this.stepper.steps = steps;

    return (
      <div class="fu-steps fu-steps--horizontal">
        <fu-horizontal-navigation
          steps={steps}
          index={this.stepper.index}
          disable={this.disable}
          vOn:active={this.active}
        />
        <div class="fu-steps__wrapper">
          <div class="fu-steps__container">
            <transition name="carousel" mode="out-in">
              {this._l(
                this.$slots.default,
                (item, index) => this.stepper.index === index && item
              )}
            </transition>
          </div>
        </div>
        <fu-steps-footer parent={this.stepper} vOn:stepperFn={this.$func} />
      </div>
    );
  },

  methods: {
    active(index) {
      this.stepper.active(index);
    },
    disable(index) {
      return !this.stepper.isActive(index);
    },
    $func(name) {
      this.stepper[name] && this.stepper[name]();
      this.$emit(name);
    },
  },
};
</script>
