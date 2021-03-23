const alphabet = require("constants/alpha.json")

module.exports = {
    lowercaseAt: (i) => {
        return alphabet.LOWERCASE[i]
    },
    uppercaseAt: (i) => {
        return alphabet.UPPERCASE[i]
    },
    lowercaseVowelAt: (i) => {
        return alphabet.LOWERCASE_VOWELS[i]
    },
    uppercaseVowelAt: (i) => {
        return alphabet.UPPERCASE_VOWELS[i]
    },
    lowercaseNonVowelAt: (i) => {
        return alphabet.LOWERCASE_NON_VOWELS[i]
    },
    uppercaseNonVowelAt: (i) => {
        return alphabet.UPPERCASE_NON_VOWELS[i]
    },
}
