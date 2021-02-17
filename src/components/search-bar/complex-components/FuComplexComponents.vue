<template>
  <el-popover placement="bottom"
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
    <a class="adv-search" slot="reference" @click="open">{{ t('fu.search_bar.adv_search') }}</a>
  </el-popover>
</template>

<script>
import Locale from "@/mixins/locale";
import Components from "./components";

export default {
  name: "FuComplexComponents",
  components: {...Components},
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
  }
}
</script>
