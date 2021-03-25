<template>
  <div class="fu-complex-search">
    <el-popover
      trigger="manual"
      v-model="active"
      :visible-arrow="false"
      popper-class="fu-complex-components">

      <div class="fu-complex-components__body">
        <slot>
          <component v-for="(c, i) in components" :key="i" :is="c.component" :size="size" v-bind="c" :ref="c.field"/>
        </slot>
      </div>
      <div class="fu-complex-components__footer">
        <el-button @click="active=false" :size="size">{{ t('fu.search_bar.cancel') }}</el-button>
        <el-button type="primary" @click="ok" :size="size">{{ t('fu.search_bar.ok') }}</el-button>
      </div>

      <fu-search-bar-button
        slot="reference"
        icon="el-icon-arrow-right"
        @click="toggle"
        :size="size"
        :class="['fu-complex-search__trigger',{'is-active':active}]"
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
    components: Array,
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
      this.refs.forEach(r => {
        if (r.init) {
          r.init()
        } else {
          console.warn("init undefined", r)
        }
      })
    },
    close() {
      this.active = false
    },
    ok() {
      this.active = false
      let conditions = [];
      this.refs.forEach(r => {
        let condition
        if (r.getCondition) {
          condition = r.getCondition()
        } else {
          console.warn("getCondition undefined", r)
        }
        if (condition && condition.value !== undefined) {
          conditions.push(condition)
        }
      })
      this.$emit("change", conditions)
    },
  },
  computed: {
    refs() {
      let refs = [];
      if (this.$slots?.default) {
        // 使用slot
        this.$slots.default.forEach(component => {
          refs.push(component.componentInstance)
        })
      } else {
        // 使用components
        this.components.forEach(c => {
          refs.push(this.$refs[c.field][0])
        })
      }
      return refs
    }
  }
}
</script>
