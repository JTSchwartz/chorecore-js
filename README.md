# ChoreCore

![NPM Version](https://img.shields.io/npm/v/chorecore)
![Downloads](https://img.shields.io/npm/dt/chorecore)
![Code Size](https://img.shields.io/github/languages/code-size/jtschwartz/chorecore-js)
![GitHub Issues](https://img.shields.io/github/issues/jtschwartz/chorecore)

## Alphabet

### Objects

#### `alphabet`
Contains the alphabet in an abundance of variants in Array form.

| Name                 | Value                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------|
| LOWERCASE            | ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] |
| UPPERCASE            | ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] |
| LOWERCASE_VOWELS     | ["a", "e", "i", "o", "u", "y"]                                                                                                     | 
| UPPERCASE_VOWELS     | ["A", "E", "I", "O", "U", "Y"]                                                                                                     |
| LOWERCASE_NON_VOWELS | ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]                               |
| UPPERCASE_NON_VOWELS | ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]                               |

#### `alphabet.strings`
Contains the alphabet in an abundance of variants in String form.

| Name                 | Value                        |
|----------------------|------------------------------|
| LOWERCASE            | "abcdefghijklmnopqrstuvwxyz" |
| UPPERCASE            | "ABCDEFGHIJKLMNOPQRSTUVWXYZ" |
| LOWERCASE_VOWELS     | "aeiouy"                     | 
| UPPERCASE_VOWELS     | "AEIOUY"                     |
| LOWERCASE_NON_VOWELS | "bcdfghjklmnpqrstvwxz"       |
| UPPERCASE_NON_VOWELS | "BCDFGHJKLMNPQRSTVWXZ"       |

### Methods
All constants have an accompanying method that will simply return the character at the index passed to it

- #### `lowercaseAt(i: number): string`
- #### `uppercaseAt(i: number): string`
- #### `lowercaseVowelAt(i: number): string`
- #### `uppercaseVowelAt(i: number): string`
- #### `lowercaseNonVowelAt(i: number): string`
- #### `uppercaseNonVowelAt(i: number): string`

## Conditionals
Conditional functions were created to simplify ternary operations when you only want to define one condition.

This is often most useful in string interpolation, but is definitely not limited to this.
<br/><br/>
#### `isEven(testVal: number, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is even, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isEqual(originalVal: any, testVal: any, returnVal: any = originalVal, sameType: boolean = true, elseVal: any = ''): any`
If the `originalVal` and `testVal` are equal, the `returnVal` is returned, otherwise it will return `elseVal`.

The `sameType` parameter determines whether to test type equality too. When `true` it will use `===`, when `false` it will use `==`.
<br/><br/>
#### `isFalse(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is `false`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isGT: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any`
If the `originalVal` is greater than the `testVal`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isGTE: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any`
If the `originalVal` is greater than or equal to the `testVal`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isLT: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any`
If the `originalVal` is less than the `testVal`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isLTE: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any`
If the `originalVal` is less than or equal to the `testVal`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNotEqual(originalVal: any, testVal: any, returnVal: any = originalVal, sameType: boolean = true, elseVal: any = ''): any`
If the `originalVal` and `testVal` are not equal, the `returnVal` is returned, otherwise it will return `elseVal`.

The `sameType` parameter determines whether to test type equality too. When `true` it will use `!==`, when `false` it will use `!=`.
<br/><br/>
#### `isNotNull(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is not `null`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNotUndefined(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is not `undefined`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNull(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is `null`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isOdd(testVal: number, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is odd, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isTrue(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is `true`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isUndefined(testVal: any, returnVal: any = testVal, elseVal: any = ''): any`
If the `testVal` is `undefined`, the `returnVal` is returned, otherwise it will return `elseVal`.

## Math

#### `closest(needle: number, arr: number[]): number`
This method will return the closest value in the array to the needle

Example:
```typescript
closest(8, [1, 7, 3, 10, 5]) 
// returns 7
```
&nbsp;
#### `parseFractionString(fraction: string): number`
This method parses a function written in out in a string and returns the number as a decimal

## Strings

#### `capitalize(alterVal: string): string`
This method will return an altered version of the string provided which only ensures the first letter is capitalized
<br/><br/>
#### `sentenceCase(alterVal: string): string`
This method will alter the provided string by capitalizing the first letter, and making all other letters lowercase.

## Time

### Object

#### `time`

Contains all time constants in milliseconds (Units such as months and up are not included as they are not constant).

| Unit        | Value     |
|-------------|-----------|
| MILLISECOND | 1         |
| SECOND      | 1000      |
| MINUTE      | 60000     |
| HOUR        | 3600000   |
| DAY         | 86400000  |
| WEEK        | 604800000 |

### Methods

All constants have an accompanying method that will simply return that unit in milliseconds multiplied by the argument you pass in.

- #### `days(multiplier: number): number`
- #### `hours(multiplier: number): number`
- #### `milliseconds(multiplier: number): number`
- #### `minutes(multiplier: number): number`
- #### `seconds(multiplier: number): number`
- #### `weeks(multiplier: number): number`

## Symbols

### Object

#### `fraction`
Contains all Unicode fraction symbols

| Name           | Value |
|----------------|-------|
| ONE_HALF       | ½     |
| ONE_THIRD      | ⅓     |
| ONE_QUARTER    | ¼     |
| ONE_FIFTH      | ⅕     |
| ONE_SIXTH      | ⅙     |
| ONE_SEVENTH    | ⅐     |
| ONE_EIGHTH     | ⅛     |
| ONE_NINTH      | ⅑     |
| ONE_TENTH      | ⅒    |
| TWO_THIRDS     | ⅔     |
| TWO_FIFTHS     | ⅖     |
| THREE_QUARTERS | ¾     |
| THREE_FIFTHS   | ⅗     |
| THREE_EIGHTHS  | ⅜     |
| FOUR_FIFTHS    | ⅘     |
| FIVE_SIXTHS    | ⅚     |
| FIVE_EIGHTHS   | ⅝     |
| SEVEN_EIGHTHS  | ⅞     |

### Method

#### `fractionToSymbol(originalVal: number | string): string`
This method accepts a fraction (either as a number or a string) and returns the closest value from the list of symbols above

Throws an error if the provided value is less than or equal to  -1, or greater than or equal to 1
