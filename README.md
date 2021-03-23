# ChoreCore

![NPM Version](https://img.shields.io/npm/v/chorecore)
![Downloads](https://img.shields.io/npm/dt/chorecore)
![Code Size](https://img.shields.io/github/languages/code-size/jtschwartz/chorecore-js)
![GitHub Issues](https://img.shields.io/github/issues/jtschwartz/chorecore)

## Conditionals
Conditional functions were created to simplify ternary operations when you only want to define one condition

This is often most useful in string interpolation, but is definitely not limited to this.
<br/><br/>
#### `isEqual(originalVal, testVal, returnVal, sameType = true, elseVal = '')`
If the `originalVal` and `testVal` are equal, the `returnVal` is returned, otherwise it will return `elseVal`.

The `sameType` parameter determines whether to test type equality too. When `true` it will use `===`, when `false` it will use `==`
<br/><br/>
#### `isFalse(testVal, returnVal, elseVal = '')`
If the `testVal` is `false`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNotEqual(originalVal, testVal, returnVal, sameType = true, elseVal = '')`
If the `originalVal` and `testVal` are not equal, the `returnVal` is returned, otherwise it will return `elseVal`.

The `sameType` parameter determines whether to test type equality too. When `true` it will use `===`, when `false` it will use `==`
<br/><br/>
#### `isNotNull(testVal, returnVal, elseVal = '')`
If the `testVal` is not `null`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNotUndefined(testVal, returnVal, elseVal = '')`
If the `testVal` is not `undefined`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isNull(testVal, returnVal, elseVal = '')`
If the `testVal` is `null`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isTrue(testVal, returnVal, elseVal = '')`
If the `testVal` is `true`, the `returnVal` is returned, otherwise it will return `elseVal`.
<br/><br/>
#### `isUndefined(testVal, returnVal, elseVal = '')`
If the `testVal` is `undefined`, the `returnVal` is returned, otherwise it will return `elseVal`.

## Time

### Object

#### `time`

Contains all time constants in milliseconds (Units such as months and up are not included as they are not constant)

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

- #### `days(multiplier)`
- #### `hours(multiplier)`
- #### `milliseconds(multiplier)`
- #### `minutes(multiplier)`
- #### `seconds(multiplier)`
- #### `weeks(multiplier)`
