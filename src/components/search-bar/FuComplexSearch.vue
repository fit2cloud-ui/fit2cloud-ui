<template>
  <div class="fu-complex-search">
    <el-popover
      trigger="manual"
      v-model="active"
      :visible-arrow="false"
      @hide="closePopover"
      popper-class="fu-complex-components">

      <div class="fu-complex-components__body">
        <slot>
          <component v-for="(c, i) in components" :key="i" :is="c.component" :size="configSize" v-bind="c" :ref="c.field" v-on="c"/>
        </slot>
      </div>
      <div class="fu-complex-components__footer">
        <el-button @click="active=false" :size="configSize">{{ t('fu.search_bar.cancel') }}</el-button>
        <el-button type="primary" @click="ok" :size="configSize">{{ t('fu.search_bar.ok') }}</el-button>
      </div>

      <fu-search-bar-button
        slot="reference"
        icon="el-icon-arrow-right"
        @click="toggle"
        :size="configSize"
        :class="['fu-complex-search__trigger',{'is-active':active}]"
        :tooltip="t('fu.search_bar.adv_search')"/>
    </el-popover>
  </div>
</template>

<script>
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";
import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  name: "FuComplexSearch",
  components: {FuSearchBarButton},
  mixins: [Locale, ConfigSize],
  props: {
    components: Array,
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    closePopover() {
      this.$emit("close")
    },
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
    createConditions(conditions) {
      let result = []
      if (conditions) {
        Object.keys(conditions).forEach(key => {
          let c = conditions[key]
          this.refs.forEach(r => {
            if (r.field === key) {
              result.push(r.createCondition(c.value, c.operator))
            }
          })
        })
      }
      return result
    }
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
        let $refs = this.$refs
        this.components.forEach(c => {
          refs.push($refs[c.field][0])
        })
      }
      return refs
    }
  }
}
</script>
