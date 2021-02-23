<template>
  <div class="fu-complex-search">
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
        :class="['fu-complex-search__trigger',{'is-active':toggle}]"
        slot="reference"
        icon="el-icon-arrow-right"
        @click="open"
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
        let ref = this.$refs[c.field][0];
        if (ref.init) {
          ref.init()
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
      this.$emit("change", conditions)
    },
  }
}
</script>
