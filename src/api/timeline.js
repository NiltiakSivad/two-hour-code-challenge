const timelineData = require('../json/timeline.json')

// Fake API calls with static JSON
export default {
  get (successCallback = () => {}) {
    successCallback(timelineData)
  }
}
