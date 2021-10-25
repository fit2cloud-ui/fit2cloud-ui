<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators" :size="configSize">
    <el-select class="fu-complex-select"
               v-model="value"
               :placeholder="t('fu.search_bar.please_select')"
               :size="configSize"
               clearable
               v-bind="$attrs"
               v-on="$listeners">
      <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"></el-option>
    </el-select>
  </fu-complex-operator>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

const MULTIPLE_OPERATORS = [
  {
    label: "fu.search_bar.in",
    value: "in"
  }, {
    label: "fu.search_bar.not_in",
    value: "not in"
  }
]
const OPERATORS = [
  {
    label: "fu.search_bar.eq",
    value: "eq"
  }, {
    label: "fu.search_bar.ne",
    value: "ne"
  }
]

export default {
  name: "FuComplexSelect",
  components: {FuComplexOperator},
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: String,
    options: Array,
  },
  data() {
    return {
      operator: "",
      value: "",
    }
  },
  methods: {
    getValueLabel(value) {
      for (let o of this.options) {
        if (o.value === value) {
          return o.label
        }
      }
      return value
    },
    getCondition() {
      if (!this.value) return;
      let {field, label, operator, operatorLabel, value, valueLabel} = this
      return new ComplexCondition({field, label, operator, operatorLabel, value, valueLabel})
    },
    init() {
      this.operator = this.defaultOperator || this.operators[0].value
      this.value = ""
    }
  },
  computed: {
    isMultiple() {
      const {multiple} = this.$attrs
      return multiple !== undefined && multiple !== false
    },
    operators() {
      return this.isMultiple ? MULTIPLE_OPERATORS : OPERATORS
    },
    valueLabel() {
      if (this.isMultiple) {
        let values = []
        this.value.forEach(v => {
          values.push(this.getValueLabel(v))
        })
        return values.join(", ");
      }
      return this.getValueLabel(this.value);
    }
  }
}
</script>
