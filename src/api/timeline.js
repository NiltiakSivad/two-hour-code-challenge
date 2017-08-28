const timelineData = require('../json/timeline.json')
const moment = require('moment')
require('moment-duration-format')

class TimelineEvent {
  constructor (event) {
    this.id = event.id
    this.title = event.title
    this.subtitle = event.subtitle
    this.color = event.color
    this.backgroundColor = event.backgroundColor
    this.lineColor = event.lineColor
    this.icon = event.icon
    this.judgmentIcon = event.judgmentIcon
    this.time = event.time
    this.notes = event.notes
  }
  prettyFormattedTime () {
    return moment.duration(this.time, 'seconds')
      .format('HH:mm:ss', { trim: false })
  }
}

// Fake API calls with static JSON
export default {
  get (successCallback = () => {}) {
    let events = timelineData.map(event => {
      return new TimelineEvent(event)
    })
    successCallback(events)
  }
}
