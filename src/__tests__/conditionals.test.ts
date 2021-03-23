import {conditionalFunctions} from '../functions/conditionals';

test('isEqual', () => {
	expect(conditionalFunctions.isEqual(0, 0, "correct", true, "incorrect")).toBe("correct")
	expect(conditionalFunctions.isEqual(0, "0", "correct", true, "incorrect")).toBe("incorrect")
	expect(conditionalFunctions.isEqual(0, 0, "correct", false, "incorrect")).toBe("correct")
	expect(conditionalFunctions.isEqual(0, "0", "correct", false, "incorrect")).toBe("correct")
	expect(conditionalFunctions.isEqual(0, "1", "correct", false, "incorrect")).toBe("incorrect")
})

test('isFalse', () => {
	expect(conditionalFunctions.isFalse(false, "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isFalse(true, "correct", "incorrect")).toBe("incorrect")
})

test('isNotEqual', () => {
	expect(conditionalFunctions.isNotEqual(0, 0, "correct", true, "incorrect")).toBe("incorrect")
	expect(conditionalFunctions.isNotEqual(0, "0", "correct", true, "incorrect")).toBe("correct")
	expect(conditionalFunctions.isNotEqual(0, 0, "correct", false, "incorrect")).toBe("incorrect")
	expect(conditionalFunctions.isNotEqual(0, "0", "correct", false, "incorrect")).toBe("incorrect")
	expect(conditionalFunctions.isNotEqual(0, "1", "correct", false, "incorrect")).toBe("correct")
})

test('isNotNull', () => {
	expect(conditionalFunctions.isNotNull("Not Null", "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isNotNull(null, "correct", "incorrect")).toBe("incorrect")
})

test('isNotUndefined', () => {
	expect(conditionalFunctions.isNotUndefined("Not Undefined", "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isNotUndefined(undefined, "correct", "incorrect")).toBe("incorrect")
})

test('isNull', () => {
	expect(conditionalFunctions.isNull(null, "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isNull("Not Null", "correct", "incorrect")).toBe("incorrect")
})

test('isTrue', () => {
	expect(conditionalFunctions.isTrue(true, "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isTrue(false, "correct", "incorrect")).toBe("incorrect")
})

test('isUndefined', () => {
	expect(conditionalFunctions.isUndefined(undefined, "correct", "incorrect")).toBe("correct")
	expect(conditionalFunctions.isUndefined("Not Undefined", "correct", "incorrect")).toBe("incorrect")
})






