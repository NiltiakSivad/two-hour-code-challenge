<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import timelineApi from '../api/timeline'
  export default {
    name: 'timeline',
    data () {
      return {
        events: []
      }
    },
    created () {
      timelineApi.get((events) => {
        debugger
        this.events = events
      })
    }
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
