<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators" :size="configSize" @change="operatorChange">
    <el-date-picker class="fu-complex-data" v-model="value" v-bind="$attrs" :size="configSize"
      :align="align" :placeholder="t('fu.search_bar.select_date')" :type="type" :key="type"
      :value-format="valueFormat" :range-separator="t('fu.search_bar.range_separator')"
      :start-placeholder="t('fu.search_bar.start_date')"
      :end-placeholder="t('fu.search_bar.end_date')">
    </el-date-picker>
  </fu-complex-operator>
</template>

<script>
import { dateFormat } from "@/filters/time";
import { ComplexCondition } from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

export default {
  name: "FuComplexDate",
  components: { FuComplexOperator },
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    align: {
      type: String,
      default: "right",
    },
    defaultOperator: {
      type: String,
      default: "between",
    },
    options: Array,
    valueFormat: {
      type: String,
      default: "timestamp",
    },
  },
  data() {
    return {
      operator: this.defaultOperator,
      value: "",
      operators: [
        {
          label: "fu.search_bar.between",
          value: "between",
        },
        {
          label: "fu.search_bar.eq",
          value: "eq",
        },
        {
          label: "fu.search_bar.gt",
          value: "gt",
        },
        {
          label: "fu.search_bar.ge",
          value: "ge",
        },
        {
          label: "fu.search_bar.lt",
          value: "lt",
        },
        {
          label: "fu.search_bar.le",
          value: "le",
        },
      ],
    };
  },
  methods: {
    operatorChange() {
      if (this.isBetween) {
        if (!Array.isArray(this.value)) {
          this.value = [];
        }
      } else {
        if (Array.isArray(this.value)) {
          this.value = "";
        }
      }
    },
    getCondition() {
      if (!String(this.value)) return;
      let { field, label, operator, operatorLabel, value, valueLabel } = this;
      if (this.isBetween) {
        operatorLabel = "";
      }
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
    isBetween() {
      return this.operator === "between";
    },
    type() {
      if (this.operator === "between") {
        return "daterange";
      } else {
        return "date";
      }
    },
    valueLabel() {
      if (this.isBetween) {
        return (
          dateFormat(this.value[0]) +
          " " +
          this.t("fu.search_bar.range_separator") +
          " " +
          dateFormat(this.value[1])
        );
      }
      return dateFormat(this.value);
    },
  },
};
</script>
