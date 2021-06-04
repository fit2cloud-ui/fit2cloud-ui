<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  padding: 0 !important;
  height: 100%;
  color: #333333;
  font-size: 14px;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
}

:focus {
  outline: none;
}

a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
/* 列表元素 */
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(144, 147, 153, 0.3);
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: transparent;
}
</style>
