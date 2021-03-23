const time = require("constants/time.json")

module.exports = {
    days: (multiplier) => {
        return multiplier * time.DAY
    },
    hours: (multiplier) => {
        return multiplier * time.HOUR
    },
    milliseconds: (multiplier) => {
        return multiplier
    },
    minutes: (multiplier) => {
        return multiplier * time.MINUTE
    },
    seconds: (multiplier) => {
        return multiplier * time.SECOND
    },
    weeks: (multiplier) => {
        return multiplier * time.WEEK
    }
}
