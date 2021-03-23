// Constants
const timeConstants = require("constants/time.json")
const alphaConstants = require("constants/alpha.json")

// Functions
const alphaFunctions = require("functions/alpha")
const conditionalFunctions = require("functions/conditionals")
const timeFunctions = require("functions/time")

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
