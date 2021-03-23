// Constants
const timeConstants = require("src/constants/time.json")
const alphaConstants = require("src/constants/alpha.json")

// Functions
const alphaFunctions = require("src/functions/alpha")
const conditionalFunctions = require("src/functions/conditionals")
const timeFunctions = require("src/functions/time")

module.exports = {
    ...alphaFunctions,
    ...conditionalFunctions,
    ...timeFunctions,
    alphabet: {
        ...alphaConstants,
        strings: {
            LOWERCASE: alphaConstants.LOWERCASE.join(''),
            UPPERCASE: alphaConstants.UPPERCASE.join(''),
            LOWERCASE_VOWELS: alphaConstants.LOWERCASE_VOWELS.join(''),
            UPPERCASE_VOWELS: alphaConstants.UPPERCASE_VOWELS.join(''),
            LOWERCASE_NON_VOWELS: alphaConstants.LOWERCASE_NON_VOWELS.join(''),
            UPPERCASE_NON_VOWELS: alphaConstants.UPPERCASE_NON_VOWELS.join(''),
        }
    },
    time: timeConstants
}
