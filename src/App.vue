<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    global.vue = this
  }
}
</script>

<style>
body {
  background: red;
}
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
