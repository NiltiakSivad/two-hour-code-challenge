<template>
  <div>
    <ul>
      <li v-for="(event, index) in events" :class="{ 'red-box': isRed(event.backgroundColor)}">
        <div>
          <span class="icon"><img class="image" :src="getImageName(event.icon)"></span>
          <div class="title" :class="{ 'title-red': isRed(event.backgroundColor)}">{{ event.title }} </div>
          <div class="subtitle"
               :class="{ 'subtitle-red': isRed(event.color),
                         'subtitle-green': isGreen(event.color)}">
            {{ event.subtitle }}
          </div>
          <div class="notes">{{ event.notes }}</div>
        </div>
        <span class="relative"><span class="date">{{ event.prettyFormattedTime() }}</span></span>
      </li>
    </ul>
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
        this.events = events
      })
    },
    methods: {
      getImageName (name) {
        switch (name) {
          case 'sentimentIconNegative':
            return require(`../assets/svg/sentimentIconNegative.svg`)
          case 'lockIcon':
            return require(`../assets/svg/lockIcon.svg`)
          case 'troubleshootIcon':
            return require(`../assets/svg/troubleshootIcon.svg`)
        }
      },
      isRed (color) {
        return color === 'red'
      },
      isGreen (color) {
        return color === 'green'
      }
    }
  }
</script>
// "scoped" limits css to this file
<style lang="scss" scoped>
  $red: #a82d25;
  $gray: #48494A;
  $green: #008D57;
  $box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);

  @mixin generic-arrow($color) {
    content: "▼";
    width: 0;
    height: 0;
    transform: rotate(90deg);
    color: $color;
    border: solid transparent;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
    position: absolute;
    right: 98%;
    top: 20px;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
  }

  .title:before {
    @include generic-arrow(white);
  }

  .title-red:before {
    @include generic-arrow($red);
  }

  .date {
    line-height: 20px;
    background-color: white;
    position: absolute;
    padding: 5px 10px 5px 10px;
    border-radius: 2px;
    box-shadow: $box-shadow;
    left: -175px;
    top: 10px;
  }

  .image {
    padding-top: 30%;
    padding-bottom: 30%;
  }

  ul {
    margin: 0;
    margin-top: 100px;
    list-style: none;
    position: relative;
    padding: 1px 100px;
    color: $gray;
  }
  ul:before {
    content: "";
    left: 100px;
    width: 1px;
    height: 100%;
    position: absolute;
    border-left: 5px solid white;
  }
  ul li {
    position: relative;
    margin-left: 75px;
    background-color: white;
    padding: 14px;
    border-radius: 6px;
    width: 500px;
    box-shadow: $box-shadow;
  }
  ul li:not(:first-child) {
    margin-top: 60px;
  }
  ul li > span {
    width: 2px;
    height: 100%;
    left: -30px;
    top: 0;
    position: absolute;
  }
  .icon {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 5px solid white;
    position: absolute;
    background: white;
    left: -110px;
    top: 0;
    text-align: center;
    box-shadow: $box-shadow;
  }
  ul li span:after {
    top: 100%;
  }
  ul li > div {
    margin-left: 10px;
  }

  @mixin generic-subtitle($color) {
    font-weight: 300;
    font-size: 14px;
    color: $color;
  }

  .subtitle {
    @include generic-subtitle($gray)
  }

  .subtitle-red {
    @include generic-subtitle($red)
  }

  .subtitle-green {
    @include generic-subtitle($green)
  }

  .red-box {
    background-color: $red !important;
  }

  .notes {
    font-weight: 400;
    margin-top: 10px;
  }
  .relative {
    height: 100%;
  }
</style>
