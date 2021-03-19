<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators" :size="size">
    <el-date-picker class="fu-complex-data-time"
                    v-model="value"
                    v-bind="$attrs"
                    :size="size"
                    :placeholder="t('fu.search_bar.select_date_time')"
                    :type="type" :key="type" value-format="timestamp"
                    :range-separator="t('fu.search_bar.range_separator')"
                    :start-placeholder="t('fu.search_bar.start_date_time')"
                    :end-placeholder="t('fu.search_bar.end_date_time')">
    </el-date-picker>
  </fu-complex-operator>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";
import {datetimeFormat} from "@/filters/time";

export default {
  name: "FuComplexDateTime",
  components: {FuComplexOperator},
  mixins: [mixins],
  props: {
    size: {
      type: String,
      default: "mini"
    },
    field: String,
    label: String,
    defaultOperator: {
      type: String,
      default: "between"
    },
  },
  data() {
    return {
      operator: this.defaultOperator,
      value: "",
      operators: [{
        label: "fu.search_bar.between",
        value: "between"
      }, {
        label: "fu.search_bar.eq",
        value: "eq"
      }, {
        label: "fu.search_bar.gt",
        value: "gt"
      }, {
        label: "fu.search_bar.ge",
        value: "ge"
      }, {
        label: "fu.search_bar.lt",
        value: "lt"
      }, {
        label: "fu.search_bar.le",
        value: "le"
      }],
    }
  },
  methods: {
    change() {
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
      if (!this.value) return;
      let {field, label, operator, operatorLabel, value, valueLabel} = this
      if (this.isBetween) {
        operatorLabel = ""
      }
      return new ComplexCondition({field, label, operator, operatorLabel, value, valueLabel})
    },
    init() {
      this.value = "";
    }
  },
  computed: {
    isBetween() {
      return this.operator === "between"
    },
    type() {
      if (this.isBetween) {
        return "datetimerange";
      } else {
        return "datetime";
      }
    },
    valueLabel() {
      if (this.isBetween) {
        return datetimeFormat(this.value[0]) + " " + this.t('fu.search_bar.range_separator') + " " + datetimeFormat(this.value[1])
      }
      return datetimeFormat(this.value)
    }
  }
}
</script>
