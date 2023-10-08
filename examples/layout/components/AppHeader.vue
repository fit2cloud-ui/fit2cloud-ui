<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../../assets/logo.png" height="25" alt=""/>
    </div>
    <div class="right">
      <span class="version">{{ PackageJSON.version }}</span>
      <a href="https://github.com/fit2cloud-ui/fit2cloud-ui" target="_blank" rel="noopener">
        <img src="../../assets/github.png" height="30" alt=""/>
      </a>
    </div>
  </div>
</template>
<script>
import PackageJSON from '../../../package.json';

export default {
  name: 'AppHeader',
  components: {},

  watch: {},
  data() {
    return {
      PackageJSON,
    };
  },
  mounted() {
  },
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-wrapper {
  // background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .logo {
    margin-left: 15px;
  }

  .version {
    font-size: 16px;
    margin-right: 25px;
    vertical-align: super;
    color: #ffffff;
  }
}
</style>

