import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  ...Locale,
  props: ConfigSize.props,
  computed: {
    ...ConfigSize.computed,
    operatorLabel() {
      for (let operator of this.operators) {
        if (operator.value === this.operator) {
          return this.t(operator.label)
        }
      }
      return this.operator
    }
  }
};
