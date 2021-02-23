<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators">
    <el-input v-model="value" :placeholder="t('fu.search_bar.please_input')" size="small" v-bind="$attrs"/>
  </fu-complex-operator>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

export default {
  name: "FuComplexInput",
  components: {FuComplexOperator},
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: String
  },
  data() {
    return {
      operator: this.defaultOperator || "like",
      value: "",
      operators: [{
        label: "fu.search_bar.like",
        value: "like"
      }, {
        label: "fu.search_bar.not_like",
        value: "not like"
      }, {
        label: "fu.search_bar.eq",
        value: "eq"
      }, {
        label: "fu.search_bar.ne",
        value: "ne"
      }],
    }
  },
  methods: {
    getCondition() {
      if (!this.value) return;
      let {field, label, operator, operatorLabel, value} = this
      return new ComplexCondition({field, label, operator, operatorLabel, value})
    },
    init() {
      this.value = "";
    }
  }
}
</script>
