<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators">
    <el-select v-model="value"
               :placeholder="t('fu.search_bar.please_select')"
               size="small"
               class="width-100"
               clearable
               :loading="loading.status"
               v-bind="$attrs">
      <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"></el-option>
    </el-select>
  </fu-complex-operator>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

export default {
  name: "FuComplexAsyncSelect",
  components: {FuComplexOperator},
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: String,
    initOptions: Function,
  },
  data() {
    return {
      loading: {status: true},
      options: [],
      operator: this.defaultOperator || "in",
      value: "",
      operators: [{
        label: "fu.search_bar.in",
        value: "in"
      }, {
        label: "fu.search_bar.not_in",
        value: "not in"
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
    getValueLabel(value) {
      for (let o of this.options) {
        if (o.value === value) {
          return o.label
        }
      }
      return value
    },
    getCondition() {
      if (!this.value) return
      let {field, label, operator, operatorLabel, value, valueLabel} = this
      return new ComplexCondition({field, label, operator, operatorLabel, value, valueLabel})
    },
    init() {
      this.value = ""
      this.loading.status = true
      this.options = []
      this.initOptions(this.options, this.loading)
    }
  },
  computed: {
    valueLabel() {
      const {multiple} = this.$attrs
      if (multiple) {
        let values = []
        this.value.forEach(v => {
          values.push(this.getValueLabel(v))
        })
        return values.join(", ");
      }
      return this.getValueLabel(this.value);
    }
  },
}
</script>
