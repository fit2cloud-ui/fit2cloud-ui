<template>
  <div class="fu-complex-search">
    <fu-complex-components :components="components" @submit="submit" v-if="components.length > 0"/>
  </div>
</template>

<script>
import FuComplexComponents from "@/components/search-bar/complex-components/FuComplexComponents";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton";

export default {
  name: "FuComplexSearch",
  components: {FuSearchBarButton, FuComplexComponents},
  props: {
    components: Array,
    conditions: Array
  },
  methods: {
    submit(conditions) {
      this.$emit("change", conditions)
    },
  }
}
</script>
