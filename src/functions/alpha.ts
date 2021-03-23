const alphabet = require("src/constants/alpha.json")

module.exports = {
    lowercaseAt: (i: number) => {
        return alphabet.LOWERCASE[i]
    },
    uppercaseAt: (i: number) => {
        return alphabet.UPPERCASE[i]
    },
    lowercaseVowelAt: (i: number) => {
        return alphabet.LOWERCASE_VOWELS[i]
    },
    uppercaseVowelAt: (i: number) => {
        return alphabet.UPPERCASE_VOWELS[i]
    },
    lowercaseNonVowelAt: (i: number) => {
        return alphabet.LOWERCASE_NON_VOWELS[i]
    },
    uppercaseNonVowelAt: (i: number) => {
        return alphabet.UPPERCASE_NON_VOWELS[i]
    },
}
