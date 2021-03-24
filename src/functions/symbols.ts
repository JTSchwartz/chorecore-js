import * as fraction from "../constants/fractions.json"
import {mathFunctions} from "./math"
import {conditionalFunctions} from "./conditionals"

interface numberToString {[key: number]: string}

const fractionMap: numberToString = {}
fractionMap[1 / 2] = fraction.ONE_HALF
fractionMap[1 / 3] = fraction.ONE_THIRD
fractionMap[1 / 4] = fraction.ONE_QUARTER
fractionMap[1 / 5] = fraction.ONE_FIFTH
fractionMap[1 / 6] = fraction.ONE_SIXTH
fractionMap[1 / 7] = fraction.ONE_SEVENTH
fractionMap[1 / 8] = fraction.ONE_EIGHTH
fractionMap[1 / 9] = fraction.ONE_NINTH
fractionMap[1 / 10] = fraction.ONE_TENTH
fractionMap[2 / 3] = fraction.TWO_THIRDS
fractionMap[2 / 5] = fraction.TWO_FIFTHS
fractionMap[3 / 4] = fraction.THREE_QUARTERS
fractionMap[3 / 5] = fraction.TWO_FIFTHS
fractionMap[3 / 8] = fraction.THREE_EIGHTHS
fractionMap[4 / 5] = fraction.FOUR_FIFTHS
fractionMap[5 / 6] = fraction.FIVE_SIXTHS
fractionMap[5 / 8] = fraction.FIVE_EIGHTHS
fractionMap[7 / 8] = fraction.SEVEN_EIGHTHS

export const symbolFunctions = {
	fractionToSymbol: (originalVal: number | string): string => {
		let testVal = typeof originalVal === "string"
					? mathFunctions.parseFractionString(originalVal)
					: originalVal

		const isNegative = testVal < 0
		testVal = Math.abs(testVal)

		if (testVal >= 1 || testVal <= -1) {
			throw new Error(`Expected value to be between 1 and -1, received value: ${testVal}`)
		}

		const symbol = fractionMap[mathFunctions.closest(testVal, Object.keys(fractionMap).map(key => +key))]
		return `${conditionalFunctions.isTrue(isNegative, "-")}${symbol}`
	}
}
