const time = require("src/constants/time.json")

module.exports = {
    days: (multiplier: number) => {
        return multiplier * time.DAY
    },
    hours: (multiplier: number) => {
        return multiplier * time.HOUR
    },
    milliseconds: (multiplier: number) => {
        return multiplier
    },
    minutes: (multiplier: number) => {
        return multiplier * time.MINUTE
    },
    seconds: (multiplier: number) => {
        return multiplier * time.SECOND
    },
    weeks: (multiplier: number) => {
        return multiplier * time.WEEK
    }
}
