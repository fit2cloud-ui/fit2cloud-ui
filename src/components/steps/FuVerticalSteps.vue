<script>
import FuVerticalNavigation from "./FuVerticalNavigation";
import FuStepsFooter from "./FuStepsFooter";
import { Step, Stepper } from "./Stepper";

export default {
  name: "FuVerticalSteps",
  components: { FuVerticalNavigation, FuStepsFooter },
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
  render() {
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
    this.stepper = Object.assign(this.stepper, this.$attrs);
    return (
      <div class="fu-steps fu-steps--vertical">
        <fu-vertical-navigation
          stepper={this.stepper}
          steps={steps}
          v-on:active={this.active}
          disable={this.disable} >
          {currentNode}
        </fu-vertical-navigation>
        <div class="fu-steps__footer">
          <fu-steps-footer vOn:stepperFn={this.$func} />
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
