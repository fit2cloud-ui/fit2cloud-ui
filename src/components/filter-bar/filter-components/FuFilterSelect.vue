<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <fu-filter-option :label="o.label" :value="o.value" v-for="o in showOptions" :key="o.value"/>
      <el-popover
        popper-class="fu-filter-component-popover"
        :visible-arrow="false"
        placement="bottom-start"
        trigger="click">
        <el-select v-model="value" v-bind="$attrs" :multiple="multiple" @change="change" :size="configSize">
          <el-option value="" v-if="useSelectAll && multiple">
            <div @click="selectAll">{{ t('fu.filter_bar.select_all') }}</div>
          </el-option>
          <el-option :label="o.label" :value="o.value" v-for="o in options" :key="o.value"/>
        </el-select>
        <div class="fu-filter-option" slot="reference">
          <i class="el-icon-plus"> {{ t('fu.filter_bar.more') }}</i>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import FuFilterOption from "./FuFilterOption";
import {FilterCondition} from "../model";
import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuFilterSelect",
  mixins: [Locale, ConfigSize],
  components: {FuFilterOption},
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    showLimit: {
      type: Number,
      default: 3 // -1 全显示
    },
    useSelectAll: {
      type: Boolean,
      default: false
    },
    label: String,
    field: {
      type: String,
      required: true
    },
    options: Array
  },
  data() {
    return {
      visible: false,
      value: this.multiple ? [] : ''
    }
  },
  provide() {
    return {
      'select': this,
    }
  },
  computed: {
    showOptions() {
      return this.options.filter((o, i) => {
        let show = this.showLimit < 0 ? true : i < this.showLimit
        if (this.multiple) {
          return show || this.value.includes(o.value)
        } else {
          return show || this.value === o.value
        }
      })
    },
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
  },
  methods: {
    change(v) {
      if (v.includes("")) {
        this.value = this.options.map(o => o.value)
      }
      this.$emit("change", this.value)
    },
    clickOption(value, selected) {
      if (!this.multiple) {
        this.value = selected ? '' : value
        return
      }
      if (selected) {
        let index = this.value.indexOf(value)
        this.value.splice(index, 1)
      } else {
        this.value.push(value)
      }
    },
    selectAll() {
      this.value = this.options.map(o => o.value)
    },
    getValueLabel(value) {
      for (let o of this.options) {
        if (o.value === value) {
          return o.label
        }
      }
      return value
    },
    getCondition() {
      if (!this.value || this.value.length === 0) return;
      let {field, label, value, valueLabel} = this
      return new FilterCondition({field, label, value, valueLabel})
    },
    init(value) {
      this.value = value !== undefined ? value : this.multiple ? [] : ''
    }
  }
}
</script>
