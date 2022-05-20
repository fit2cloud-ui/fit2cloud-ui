<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <el-date-picker class="fu-filter-date" v-model="value" v-bind="$attrs" :size="configSize"
                      :align="align" :placeholder="t('fu.search_bar.select_date')" type="daterange"
                      :value-format="valueFormat" range-separator=" - "
                      :start-placeholder="t('fu.search_bar.start_date')"
                      :end-placeholder="t('fu.search_bar.end_date')">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import {FilterCondition} from "../model";
import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";
import {dateFormat} from "@/filters/time";

export default {
  name: "FuFilterDate",
  mixins: [Locale, ConfigSize],
  props: {
    label: String,
    field: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: "right",
    },
    valueFormat: {
      type: String,
      default: "timestamp",
    },
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    valueLabel() {
      return (
        dateFormat(this.value[0]) +
        " - " +
        dateFormat(this.value[1])
      );
    },
  },
  methods: {
    getCondition() {
      if (!String(this.value)) return;
      let {field, label, value, valueLabel} = this
      return new FilterCondition({field, label, value, valueLabel})
    },
    init(value) {
      this.value = value !== undefined ? value : ''
    }
  }
}
</script>
