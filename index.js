const time = require("constants/time.json")

module.exports = {
    days: (multiplier) => {
        return multiplier * time.DAY
    },
    hours: (multiplier) => {
        return multiplier * time.HOUR
    },
    isEqual: (originVal, testVal, returnVal, sameType = true) => {
        if (sameType) if (originVal === testVal) return returnVal
        else if (originVal == testVal) return returnVal

    },
    isFalse: (testVal, returnVal) => {
        if (!testVal) return returnVal
    },
    isNotEqual: (originVal, testVal, returnVal, sameType = true) => {
        if (sameType) if (originVal !== testVal) return returnVal
        else if (originVal != testVal) return returnVal
    },
    isNotNull: (testVal, returnVal) => {
        if (testVal !== null) return returnVal
    },
    isNotUndefined: (testVal, returnVal) => {
        if (testVal !== undefined) return returnVal
    },
    isNull: (testVal, returnVal) => {
        if (testVal === null) return returnVal
    },
    isTrue: (testVal, returnVal) => {
        if (testVal) return returnVal
    },
    isUndefined: (testVal, returnVal) => {
        if (testVal === undefined) return returnVal
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
    time: time,
    weeks: (multiplier) => {
        return multiplier * time.WEEK
    }
}
