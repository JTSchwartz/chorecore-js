// Constants
import * as timeConstants from "./constants/time.json"
import * as alphaConstants from "./constants/alpha.json"
import * as fractionConstants from "./constants/fractions.json"

// Functions
import {alphaFunctions} from "./functions/alpha"
import {conditionalFunctions} from "./functions/conditionals"
import {stringFunctions} from "./functions/strings"
import {timeFunctions} from "./functions/time"
import {symbolFunctions} from "./functions/symbols"
import {mathFunctions} from "./functions/math"

module.exports = {
	...alphaFunctions,
	...conditionalFunctions,
	...mathFunctions,
	...stringFunctions,
	...symbolFunctions,
	...timeFunctions,
	alphabet: {
		...alphaConstants,
		strings: {
			LOWERCASE: alphaConstants.LOWERCASE.join(""),
			UPPERCASE: alphaConstants.UPPERCASE.join(""),
			LOWERCASE_VOWELS: alphaConstants.LOWERCASE_VOWELS.join(""),
			UPPERCASE_VOWELS: alphaConstants.UPPERCASE_VOWELS.join(""),
			LOWERCASE_NON_VOWELS: alphaConstants.LOWERCASE_NON_VOWELS.join(""),
			UPPERCASE_NON_VOWELS: alphaConstants.UPPERCASE_NON_VOWELS.join(""),
		}
	},
	fraction: fractionConstants,
	time: timeConstants
}
