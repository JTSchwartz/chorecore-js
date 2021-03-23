module.exports = {
    isEqual: (originalVal, testVal, returnVal, sameType = true, elseVal = '') => {
        if (sameType) if (originalVal === testVal) return returnVal
        else if (originalVal == testVal) return returnVal
        return elseVal
    },
    isFalse: (testVal, returnVal, elseVal = '') => {
        if (!testVal) return returnVal
        return elseVal
    },
    isNotEqual: (originalVal, testVal, returnVal, sameType = true, elseVal = '') => {
        if (sameType) if (originalVal !== testVal) return returnVal
        else if (originalVal != testVal) return returnVal
        return elseVal
    },
    isNotNull: (testVal, returnVal, elseVal = '') => {
        if (testVal !== null) return returnVal
        return elseVal
    },
    isNotUndefined: (testVal, returnVal, elseVal = '') => {
        if (testVal !== undefined) return returnVal
        return elseVal
    },
    isNull: (testVal, returnVal, elseVal = '') => {
        if (testVal === null) return returnVal
        return elseVal
    },
    isTrue: (testVal, returnVal, elseVal = '') => {
        if (testVal) return returnVal
        return elseVal
    },
    isUndefined: (testVal, returnVal, elseVal = '') => {
        if (testVal === undefined) return returnVal
        return elseVal
    },
}
