<template>
  <fu-operator-component :label="label" v-model="operator" :operators="operators">
    <el-date-picker v-model="value" class="width-100"
                    :placeholder="t('fu.search_bar.select_date')" size="small"
                    :type="type" :key="type" value-format="timestamp"
                    :range-separator="t('fu.search_bar.range_separator')"
                    :start-placeholder="t('fu.search_bar.start_date')"
                    :end-placeholder="t('fu.search_bar.end_date')">
    </el-date-picker>
  </fu-operator-component>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "@/components/search-bar/complex-components/mixins";
import FuOperatorComponent from "@/components/search-bar/complex-components/FuOperatorComponent";
import {dateFormat} from "@/filters/time";

export default {
  name: "FuDateTimeComponent",
  components: {FuOperatorComponent},
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: String,
    options: Array
  },
  data() {
    return {
      operator: this.defaultOperator || "between",
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
    clean() {
      this.value = "";
    }
  },
  computed: {
    isBetween() {
      return this.operator === "between"
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
        return dateFormat(this.value[0]) + " " + this.t('fu.search_bar.range_separator') + " " + dateFormat(this.value[1])
      }
      return dateFormat(this.value)
    }
  }
}
</script>
