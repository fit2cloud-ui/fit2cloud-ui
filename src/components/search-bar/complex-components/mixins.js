import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";
import {ComplexCondition} from "@/components/search-bar/model";

export default {
  props: ConfigSize.props,
  methods: {
    ...Locale.methods,
    createCondition(value, operator) {
      this.value = value
      this.operator = operator
      return this.getCondition()
    }
  },
  computed: {
    ...ConfigSize.computed,
    operatorLabel() {
      for (let operator of this.operators) {
        if (operator.value === this.operator) {
          return this.t(operator.label)
        }
      }
      return this.operator
    },
  }
};
