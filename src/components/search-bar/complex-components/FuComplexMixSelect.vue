<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators" :size="configSize" @change="operatorChange">
    <el-select class="fu-complex-select" v-model="value"
      :placeholder="t('fu.search_bar.please_select')" :size="configSize" clearable
      :multiple="isMultiple" v-if="show" v-bind="$attrs" v-on="$listeners">
      <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"></el-option>
    </el-select>
  </fu-complex-operator>
</template>

<script>
import { ComplexCondition } from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

export default {
  name: "FuComplexMixSelect",
  components: { FuComplexOperator },
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: {
      type: String,
      default: "eq",
    },
    options: Array,
  },
  data() {
    return {
      operators: [
        {
          label: "fu.search_bar.eq",
          value: "eq",
        },
        {
          label: "fu.search_bar.ne",
          value: "ne",
        },
        {
          label: "fu.search_bar.in",
          value: "in",
        },
        {
          label: "fu.search_bar.not_in",
          value: "not in",
        },
      ],
      show: true,
      operator: this.defaultOperator,
      value: "",
    };
  },
  methods: {
    operatorChange() {
      if (this.isMultiple) {
        this.value = [];
      } else {
        this.value = "";
      }
      this.show = false;
      setTimeout(() => {
        this.show = true;
      });
    },
    getValueLabel(value) {
      for (let o of this.options) {
        if (o.value === value) {
          return o.label;
        }
      }
      return value;
    },
    getCondition() {
      if (!String(this.value)) return;
      let { field, label, operator, operatorLabel, value, valueLabel } = this;
      return new ComplexCondition({
        field,
        label,
        operator,
        operatorLabel,
        value,
        valueLabel,
      });
    },
    init() {
      this.value = "";
    },
  },
  computed: {
    isMultiple() {
      return this.operator === "in" || this.operator === "not in";
    },
    valueLabel() {
      if (this.isMultiple) {
        let values = [];
        this.value.forEach((v) => {
          values.push(this.getValueLabel(v));
        });
        return values.join(", ");
      }
      return this.getValueLabel(this.value);
    },
  },
};
</script>
