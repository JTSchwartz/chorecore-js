import {conditionalFunctions} from "../functions/conditionals"
import * as Constant from "./constants.json"

test("isEven", () => {
	expect(conditionalFunctions.isEven(0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEven(6, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEven(37, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isEven(-18, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEven(-25, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isEqual", () => {
	expect(conditionalFunctions.isEqual(0, 0, Constant.CORRECT, true, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEqual(0, "0", Constant.CORRECT, true, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isEqual(0, 0, Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEqual(0, "0", Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isEqual(0, "1", Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isGT", () => {
	expect(conditionalFunctions.isGT(1, 0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isGT(1, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isGT(0, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isGTE", () => {
	expect(conditionalFunctions.isGTE(1, 0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isGTE(1, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isGTE(0, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isLT", () => {
	expect(conditionalFunctions.isLT(0, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isLT(1, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isLT(1, 0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isLTE", () => {
	expect(conditionalFunctions.isLTE(0, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isLTE(1, 1, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isLTE(1, 0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isFalse", () => {
	expect(conditionalFunctions.isFalse(false, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isFalse(true, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isNotEqual", () => {
	expect(conditionalFunctions.isNotEqual(0, 0, Constant.CORRECT, true, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isNotEqual(0, "0", Constant.CORRECT, true, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isNotEqual(0, 0, Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isNotEqual(0, "0", Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isNotEqual(0, "1", Constant.CORRECT, false, Constant.INCORRECT)).toBe(Constant.CORRECT)
})

test("isNotNull", () => {
	expect(conditionalFunctions.isNotNull("Not Null", Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isNotNull(null, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isNotUndefined", () => {
	expect(conditionalFunctions.isNotUndefined("Not Undefined", Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isNotUndefined(undefined, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isNull", () => {
	expect(conditionalFunctions.isNull(null, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isNull("Not Null", Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isOdd", () => {
	expect(conditionalFunctions.isOdd(0, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isOdd(6, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
	expect(conditionalFunctions.isOdd(37, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isOdd(-25, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isOdd(-18, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isTrue", () => {
	expect(conditionalFunctions.isTrue(true, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isTrue(false, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})

test("isUndefined", () => {
	expect(conditionalFunctions.isUndefined(undefined, Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.CORRECT)
	expect(conditionalFunctions.isUndefined("Not Undefined", Constant.CORRECT, Constant.INCORRECT)).toBe(Constant.INCORRECT)
})






