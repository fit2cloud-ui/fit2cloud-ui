<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  margin: 0;
  height: 100vh;
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

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4A4B4D;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: transparent;
}
</style>
