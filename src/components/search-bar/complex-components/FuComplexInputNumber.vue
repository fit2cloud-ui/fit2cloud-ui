<template>
  <fu-complex-operator :label="label" v-model="operator" :operators="operators" :size="configSize" @change="operatorChange">
    <div v-if="isBetween" class="fu-complex-input-number">
      <div class="fu-complex-input-number__input" @mouseenter="isShow='start'"
        @mouseleave="mouseleave('start')">
        <el-input-number ref="start" :value="value && value[0]" :size="configSize"
          @change="change($event,'start')" v-bind="$attrs" :class="getClassName('start')"
          @focus="focus('start')" style="width:100%">
        </el-input-number>
      </div>
      <span
        class="range-separator">{{ rangeSeparator || t('fu.search_bar.range_separator') }}</span>
      <div class="fu-complex-input-number__input" @mouseenter="isShow='end'"
        @mouseleave="mouseleave('end')">
        <el-input-number ref="end" :value="value && value[1]" :size="configSize"
          @change="change($event,'end')" v-bind="$attrs" :class="getClassName('end')"
          @focus="focus('end')" style="width:100%">
        </el-input-number>
      </div>
    </div>
    <el-input-number v-else ref="single" v-model="value" :size="configSize" @change="change"
      v-bind="$attrs" :class="getClassName('single')" @focus="focus('single')" style="width:100%">
    </el-input-number>
  </fu-complex-operator>
</template>

<script>
import { ComplexCondition } from "@/components/search-bar/model";
import mixins from "./mixins";
import FuComplexOperator from "./FuComplexOperator";

export default {
  name: "FuComplexInputNumber",
  components: { FuComplexOperator },
  mixins: [mixins],
  props: {
    field: String,
    label: String,
    defaultOperator: {
      type: String,
      default: "between",
    },
    rangeSeparator: String,
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
      isShow: "",
      isFocus: false,
    };
  },
  methods: {
    operatorChange() {
      if (this.isBetween) {
        if (!Array.isArray(this.value)) {
          this.value = [0, 0];
        }
      } else {
        if (Array.isArray(this.value)) {
          this.value = 0;
        }
      }
    },
    change(val, type) {
      if (this.isBetween) {
        if (type === "start") {
          if (!this.value || val >= this.value[1]) {
            this.value = [val, val + 1];
          } else {
            this.value = [val, this.value ? this.value[1] : 0];
          }
        }
        if (type === "end") {
          if (!this.value || val <= this.value[0]) {
            this.value = [val - 1, val];
          } else {
            this.value = [this.value ? this.value[0] : 0, val];
          }
        }
      } else {
        this.value = val;
      }
    },
    getClassName(val) {
      return this.isShow === val ? "" : "is-hide";
    },
    focus(val) {
      this.isShow = val;
      this.isFocus = true;
    },
    mouseleave(val) {
      if (!this.$refs[val]?.$refs.input.focused) {
        this.isShow = "";
      }
    },
    getCondition() {
      if (
        !String(this.value) ||
        (this.value.length && this.value[0] === this.value[1])
      )
        return;
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
    valueLabel() {
      if (this.isBetween) {
        return (
          this.value[0] +
          " " +
          (this.rangeSeparator || this.t("fu.search_bar.range_separator")) +
          " " +
          this.value[1]
        );
      }
      return this.value;
    },
  },
};
</script>
