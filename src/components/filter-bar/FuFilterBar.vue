<template>
  <div class="fu-filter-bar">
    <div class="fu-filter-bar__top">
      <div class="top_left">
        <slot name="tl"></slot>
      </div>
      <div class="top_right">
        <slot name="tr">
          <fu-search-input v-model="quick" :size="configSize" :placeholder="quickPlaceholder" @change="change"/>
          <el-button @click="open" :size="configSize">
            <i class="el-icon-finished"/> {{ t('fu.filter_bar.filter') }}
            <span v-if="conditions.length > 0">({{ conditions.length }})</span>
          </el-button>
        </slot>
        <slot name="buttons"></slot>
      </div>
    </div>
    <div class="fu-filter-bar__bottom">
      <fu-filter ref="filter" @filter="filter" :count="resultCount" :size="configSize" :components="components">
        <slot></slot>
      </fu-filter>
    </div>
  </div>
</template>

<script>
import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuFilterBar",
  mixins: [Locale, ConfigSize],
  props: {
    resultCount: Number,
    quickPlaceholder: String,
    components: Array
  },
  data() {
    return {
      quick: "",
      conditions: [],
    }
  },
  methods: {
    open() {
      this.$refs.filter.open()
    },
    change() {
      this.$emit("exec", this.conditionObj)
    },
    filter(conditions) {
      this.conditions = conditions
      this.$emit("exec", this.conditionObj)
    },
    setConditions(conditionObj) {
      this.$refs.filter.setConditions(conditionObj)
    }
  },
  computed: {
    conditionObj({quick, conditions}) {
      let obj = {quick: quick}
      conditions.forEach(c => {
        obj[c.field] = c
      })
      return obj
    }
  }
}
</script>
