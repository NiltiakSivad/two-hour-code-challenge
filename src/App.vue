<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  #app {
    font-family: 'Open Sans', sans-serif;
  }
  body {
    max-width: 1200px;
    color: #eee9dc;
    background: #cfcfcf;
  }
</style>
