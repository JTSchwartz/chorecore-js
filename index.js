// Constants
const timeConstants = require("constants/time.json")

// Functions
const conditionalFunctions = require("functions/conditionals")
const timeFunctions = require("functions/time")

module.exports = {
    ...conditionalFunctions,
    ...timeFunctions,
    time: timeConstants,
}
