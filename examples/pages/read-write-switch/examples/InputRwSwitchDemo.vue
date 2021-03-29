<template>
  <div>
    <fu-input-rw-switch v-model="input" placeholder="单击填写"/>
  </div>
</template>

<script>
export default {
  name: "InputRwSwitchDemo",
  data() {
    return {
      input: "单击填写"
    }
  }
}
</script>
