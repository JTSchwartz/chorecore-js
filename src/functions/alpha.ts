import * as alphabet from "../constants/alpha.json"

export const alphaFunctions = {
	lowercaseAt: (i: number): string => {
		return alphabet.LOWERCASE[i]
	},
	uppercaseAt: (i: number): string => {
		return alphabet.UPPERCASE[i]
	},
	lowercaseVowelAt: (i: number): string => {
		return alphabet.LOWERCASE_VOWELS[i]
	},
	uppercaseVowelAt: (i: number): string => {
		return alphabet.UPPERCASE_VOWELS[i]
	},
	lowercaseNonVowelAt: (i: number): string => {
		return alphabet.LOWERCASE_NON_VOWELS[i]
	},
	uppercaseNonVowelAt: (i: number): string => {
		return alphabet.UPPERCASE_NON_VOWELS[i]
	},
}
