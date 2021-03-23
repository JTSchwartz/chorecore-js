import {alphaFunctions} from '../functions/alpha';
import * as alphabet from '../constants/alpha.json';

test('lowercaseAt', () => {
	expect(alphaFunctions.lowercaseAt(2)).toBe(alphabet.LOWERCASE[2])
})

test('uppercaseAt', () => {
	expect(alphaFunctions.uppercaseAt(9)).toBe(alphabet.UPPERCASE[9])
})

test('lowercaseVowelAt', () => {
	expect(alphaFunctions.lowercaseVowelAt(0)).toBe(alphabet.LOWERCASE_VOWELS[0])
})

test('uppercaseVowelAt', () => {
	expect(alphaFunctions.uppercaseVowelAt(1)).toBe(alphabet.UPPERCASE_VOWELS[1])
})

test('lowercaseNonVowelAt', () => {
	expect(alphaFunctions.lowercaseNonVowelAt(1)).toBe(alphabet.LOWERCASE_NON_VOWELS[1])
})

test('uppercaseNonVowelAt', () => {
	expect(alphaFunctions.uppercaseNonVowelAt(19)).toBe(alphabet.UPPERCASE_NON_VOWELS[19])
})


	
	
	
	
