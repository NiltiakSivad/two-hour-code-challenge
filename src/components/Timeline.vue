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

<style scoped lang="scss">
  $red: #a82d25;
  $gray: #48494A;
  $green: #008D57;
</style>
