<template>
  <el-popover
    trigger="manual"
    v-model="toggle"
    :visible-arrow="false"
    popper-class="fu-complex-components">

    <div class="fu-complex-components__body">
      <component v-for="(c, i) in components" :key="i" :is="c.component" v-bind="c" :ref="c.field"/>
    </div>
    <div class="fu-complex-components__footer">
      <el-button @click="toggle=false" size="small">{{ t('fu.search_bar.cancel') }}</el-button>
      <el-button type="primary" @click="ok" size="small">{{ t('fu.search_bar.ok') }}</el-button>
    </div>

    <fu-search-bar-button
      slot="reference"
      size="mini"
      :icon="icon"
      @click="open"
      :tooltip="t('fu.search_bar.adv_search')"/>
  </el-popover>
</template>

<script>
import Locale from "@/mixins/locale";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import Components from "./components";

export default {
  name: "FuComplexComponents",
  components: {FuSearchBarButton, ...Components},
  mixins: [Locale],
  props: {
    components: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    open() {
      this.toggle = true
      this.components.forEach(c => {
        let ref = this.$refs[c.field][0];
        if (ref.clean) {
          ref.clean()
        }
      })
    },
    ok() {
      this.toggle = false
      let conditions = [];
      this.components.forEach(c => {
        let condition = this.$refs[c.field][0].getCondition()
        if (condition && condition.value) {
          conditions.push(condition)
        }
      })
      this.$emit("submit", conditions)
    }
  },
  computed: {
    icon() {
      return this.toggle ? "el-icon-arrow-down" : "el-icon-arrow-right"
    }
  }
}
</script>
