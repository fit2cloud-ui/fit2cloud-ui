<template>
  <fu-operator-component :label="label" v-model="operator" :operators="operators">
    <el-input v-model="value" :placeholder="t('fu.search_bar.please_input')" size="small"/>
  </fu-operator-component>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "@/components/search-bar/complex-components/mixins";
import FuOperatorComponent from "@/components/search-bar/complex-components/FuOperatorComponent";

export default {
  name: "FuInputComponent",
  components: {FuOperatorComponent},
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
    clean() {
      this.value = "";
    }
  }
}
</script>
