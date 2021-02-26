import Locale from "@/mixins/locale";

export default {
  ...Locale,
  computed: {
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
