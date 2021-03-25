<template>
  <div class="fu-operator-component">
    <div :class="['fu-operator-component__label', 'fu-operator-component__label--' + configSize]">
      {{ label }}
    </div>
    <div class="fu-operator-component__operator">
      <el-select class="search-operator"
                 v-model="value"
                 :placeholder="t('fu.search_bar.please_select')"
                 :size="configSize"
                 @change="change"
                 @input="change">
        <el-option v-for="o in operators" :key="o.value" :label="t(o.label)" :value="o.value"/>
      </el-select>
    </div>
    <div class="fu-operator-component__value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuComplexOperator",
  mixins: [Locale, ConfigSize],
  model: {
    prop: 'operator',
    event: 'change'
  },
  props: {
    label: String,
    operator: String,
    operators: Array,
  },
  data() {
    return {
      value: this.operator
    }
  },
  watch: {
    operator: function (v) {
      this.value = v
    }
  },
  methods: {
    change(value) {
      this.$emit('change', value);
    }
  }
}
</script>

<style scoped>

</style>
