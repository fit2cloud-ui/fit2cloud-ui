<template>
  <div class="fu-filter">
    <div class="fu-filter__result">{{ count }} <span style="opacity: 0.6">{{ t('fu.filter_bar.results') }}</span></div>
    <div class="fu-filter__split"/>

    <div class="fu-filter__scroll" @mousedown="left" @mouseup="mouseup" v-if="scroll">
      <i class="el-icon-arrow-left"></i>
    </div>
    <fu-filter-conditions :conditions="conditions" @change="change"/>

    <div class="fu-filter__scroll" @mousedown="right" @mouseup="mouseup" v-if="scroll">
      <i class="el-icon-arrow-right"></i>
    </div>

    <div class="fu-filter__clear" @click="clear" v-if="conditions.length > 0">
      <i class="el-icon-delete"/>
      {{ t('fu.filter_bar.clear') }}
    </div>

    <el-drawer :size="drawerWidth" custom-class="fu-filter__drawer" :title="t('fu.filter_bar.drawer_title')"
               :visible.sync="drawer"
               @open="initComponents" v-show="show" :modal="modal">
      <div class="drawer-body">
        <slot>
          <component v-for="(c, i) in components" :key="i" :is="c.component" :size="configSize" v-bind="c"
                     :ref="c.field" v-on="c"/>
        </slot>
      </div>
      <div class="drawer-footer">
        <slot name="footer">
          <el-button :size="configSize" @click="drawer=false">{{ t('fu.filter_bar.cancel') }}</el-button>
          <el-button :size="configSize" type="primary" @click="filter">{{ t('fu.filter_bar.search') }}</el-button>
        </slot>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ConfigSize from "@/mixins/config-size";
import Locale from "@/mixins/locale";
import FuFilterConditions from "@/components/filter-bar/FuFilterConditions";

export default {
  name: "FuFilter",
  components: {FuFilterConditions},
  mixins: [Locale, ConfigSize],
  props: {
    count: {
      type: Number,
      default: 0
    },
    components: Array,
    drawerWidth: {
      type: [Number, String],
      default: "680px"
    }
  },
  data() {
    return {
      drawer: true,
      conditions: [],
      show: false,
      modal: false,
      leftTimer: "",
      rightTimer: "",
      scroll: false,
    }
  },
  methods: {
    mouseup() {
      clearInterval(this.leftTimer)
      clearInterval(this.rightTimer)
    },
    left() {
      let conditions = this.$el.getElementsByClassName("fu-filter-conditions")[0]
      this.leftTimer = setInterval(() => {
        conditions.scrollLeft -= 15
      }, 50)
    },
    right() {
      let conditions = this.$el.getElementsByClassName("fu-filter-conditions")[0]
      this.rightTimer = setInterval(() => {
        conditions.scrollLeft += 15
      }, 50)
    },
    change() {
      this.$nextTick(() => {
        let conditions = this.$el.getElementsByClassName("fu-filter-conditions")[0]
        this.scroll = conditions.getBoundingClientRect().width >= this.scrollWidth
      })
      this.$emit("filter", this.conditions)
    },
    setConditions(conditions) {
      this.conditions = []
      if (conditions) {
        Object.keys(conditions).forEach(key => {
          let value = conditions[key].value
          this.refs.forEach(r => {
            if (r.field === key) {
              r.init(value)
              this.conditions.push(r.getCondition())
            }
          })
        })
        this.change();
      }
    },
    filter() {
      this.conditions = []
      this.refs.forEach(r => {
        let condition
        if (r.getCondition) {
          condition = r.getCondition()
        } else {
          console.warn("getCondition undefined", r)
        }
        if (condition && condition.value !== undefined) {
          this.conditions.push(condition)
        }
      })
      this.drawer = false
      this.change();
    },
    open() {
      this.show = true
      this.drawer = true
    },
    initComponents() {
      this.refs.forEach(r => {
        if (r.init) {
          let condition = this.conditions.find(c => c.field === r.field)
          r.init(condition?.value)
        } else {
          console.warn("init undefined", r)
        }
      })
    },
    clear() {
      this.conditions = []
      this.initComponents()
      this.change();
    }
  },
  computed: {
    scrollWidth() {
      return this.$el.getBoundingClientRect().width - 210
    },
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
  },
  mounted() {
    this.modal = true
    this.drawer = false
  }
}
</script>
