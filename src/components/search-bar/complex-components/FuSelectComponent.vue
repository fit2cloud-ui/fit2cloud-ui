<template>
  <fu-operator-component :label="label" v-model="operator" :operators="operators">
    <el-select v-model="value"
               :placeholder="t('fu.search_bar.please_select')"
               size="small"
               class="width-100"
               clearable filterable :multiple="multiple">
      <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"></el-option>
    </el-select>
  </fu-operator-component>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";
import mixins from "@/components/search-bar/complex-components/mixins";
import FuOperatorComponent from "@/components/search-bar/complex-components/FuOperatorComponent";

export default {
  name: "FuSelectComponent",
  components: {FuOperatorComponent},
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: String,
    options: Array,
    multiple: Boolean
  },
  data() {
    return {
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
      if (!this.value) return;
      let {field, label, operator, operatorLabel, value, valueLabel} = this
      return new ComplexCondition({field, label, operator, operatorLabel, value, valueLabel})
    },
    clean() {
      this.value = "";
    }
  },
  computed: {
    valueLabel() {
      if (this.multiple) {
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
