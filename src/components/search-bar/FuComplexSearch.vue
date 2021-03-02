<template>
  <div class="fu-complex-search">
    <el-popover
      trigger="manual"
      v-model="toggle"
      :visible-arrow="false"
      popper-class="fu-complex-components">

      <div class="fu-complex-components__body">
        <component v-for="(c, i) in components" :key="i" :is="c.component" :size="size" v-bind="c" :ref="c.field"/>
      </div>
      <div class="fu-complex-components__footer">
        <el-button @click="toggle=false" :size="size">{{ t('fu.search_bar.cancel') }}</el-button>
        <el-button type="primary" @click="ok" :size="size">{{ t('fu.search_bar.ok') }}</el-button>
      </div>

      <fu-search-bar-button
        slot="reference"
        icon="el-icon-arrow-right"
        @click="open"
        :size="size"
        :class="['fu-complex-search__trigger',{'is-active':toggle}]"
        :tooltip="t('fu.search_bar.adv_search')"/>
    </el-popover>
  </div>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import Locale from "@/mixins/locale";

export default {
  name: "FuComplexSearch",
  components: {FuSearchBarButton},
  mixins: [Locale],
  props: {
    size: {
      type: String,
      default: "mini"
    },
    components: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    open() {
      this.toggle = !this.toggle
      this.components.forEach(c => {
        let ref = this.$refs[c.field][0]
        if (ref.init) {
          ref.init()
        }
      })
    },
    ok() {
      this.toggle = false
      let conditions = [];
      this.components.forEach(c => {
        let ref = this.$refs[c.field][0]
        let condition
        if (ref.getCondition) {
          condition = ref.getCondition()
        }
        if (condition && condition.value !== undefined) {
          conditions.push(condition)
        }
      })
      this.$emit("change", conditions)
    },
  }
}
</script>
