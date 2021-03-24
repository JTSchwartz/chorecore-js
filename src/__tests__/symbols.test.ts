import {symbolFunctions} from "../functions/symbols"
import * as fraction from "../constants/fractions.json"

test("fractionToSymbol - number", () => {
	expect(symbolFunctions.fractionToSymbol(1 / 2)).toBe(fraction.ONE_HALF)
	expect(symbolFunctions.fractionToSymbol(1 / 3)).toBe(fraction.ONE_THIRD)
	expect(symbolFunctions.fractionToSymbol(1 / 4)).toBe(fraction.ONE_QUARTER)
	expect(symbolFunctions.fractionToSymbol(1 / 5)).toBe(fraction.ONE_FIFTH)
	expect(symbolFunctions.fractionToSymbol(1 / 6)).toBe(fraction.ONE_SIXTH)
	expect(symbolFunctions.fractionToSymbol(1 / 7)).toBe(fraction.ONE_SEVENTH)
	expect(symbolFunctions.fractionToSymbol(1 / 8)).toBe(fraction.ONE_EIGHTH)
	expect(symbolFunctions.fractionToSymbol(1 / 9)).toBe(fraction.ONE_NINTH)
	expect(symbolFunctions.fractionToSymbol(1 / 10)).toBe(fraction.ONE_TENTH)
	expect(symbolFunctions.fractionToSymbol(2 / 3)).toBe(fraction.TWO_THIRDS)
	expect(symbolFunctions.fractionToSymbol(2 / 5)).toBe(fraction.TWO_FIFTHS)
	expect(symbolFunctions.fractionToSymbol(3 / 4)).toBe(fraction.THREE_QUARTERS)
	expect(symbolFunctions.fractionToSymbol(3 / 5)).toBe(fraction.TWO_FIFTHS)
	expect(symbolFunctions.fractionToSymbol(3 / 8)).toBe(fraction.THREE_EIGHTHS)
	expect(symbolFunctions.fractionToSymbol(4 / 5)).toBe(fraction.FOUR_FIFTHS)
	expect(symbolFunctions.fractionToSymbol(5 / 6)).toBe(fraction.FIVE_SIXTHS)
	expect(symbolFunctions.fractionToSymbol(5 / 8)).toBe(fraction.FIVE_EIGHTHS)
	expect(symbolFunctions.fractionToSymbol(7 / 8)).toBe(fraction.SEVEN_EIGHTHS)

	expect(symbolFunctions.fractionToSymbol(-1 / 2)).toBe(`-${fraction.ONE_HALF}`)

	expect(symbolFunctions.fractionToSymbol(0.51)).toBe(fraction.ONE_HALF)
	expect(symbolFunctions.fractionToSymbol(0.749)).toBe(fraction.THREE_QUARTERS)
})

test("fractionToSymbol - string", () => {
	expect(symbolFunctions.fractionToSymbol("1/2")).toBe(fraction.ONE_HALF)
	expect(symbolFunctions.fractionToSymbol("1/3")).toBe(fraction.ONE_THIRD)
	expect(symbolFunctions.fractionToSymbol("1/4")).toBe(fraction.ONE_QUARTER)
	expect(symbolFunctions.fractionToSymbol("1/5")).toBe(fraction.ONE_FIFTH)
	expect(symbolFunctions.fractionToSymbol("1/6")).toBe(fraction.ONE_SIXTH)
	expect(symbolFunctions.fractionToSymbol("1/7")).toBe(fraction.ONE_SEVENTH)
	expect(symbolFunctions.fractionToSymbol("1/8")).toBe(fraction.ONE_EIGHTH)
	expect(symbolFunctions.fractionToSymbol("1/9")).toBe(fraction.ONE_NINTH)
	expect(symbolFunctions.fractionToSymbol("1/10")).toBe(fraction.ONE_TENTH)
	expect(symbolFunctions.fractionToSymbol("2/3")).toBe(fraction.TWO_THIRDS)
	expect(symbolFunctions.fractionToSymbol("2/5")).toBe(fraction.TWO_FIFTHS)
	expect(symbolFunctions.fractionToSymbol("3/4")).toBe(fraction.THREE_QUARTERS)
	expect(symbolFunctions.fractionToSymbol("3/5")).toBe(fraction.TWO_FIFTHS)
	expect(symbolFunctions.fractionToSymbol("3/8")).toBe(fraction.THREE_EIGHTHS)
	expect(symbolFunctions.fractionToSymbol("4/5")).toBe(fraction.FOUR_FIFTHS)
	expect(symbolFunctions.fractionToSymbol("5/6")).toBe(fraction.FIVE_SIXTHS)
	expect(symbolFunctions.fractionToSymbol("5/8")).toBe(fraction.FIVE_EIGHTHS)
	expect(symbolFunctions.fractionToSymbol("7/8")).toBe(fraction.SEVEN_EIGHTHS)

	expect(symbolFunctions.fractionToSymbol("-1/2")).toBe(`-${fraction.ONE_HALF}`)
})

test("fractionToSymbol - error", () => {
	expect(() => {symbolFunctions.fractionToSymbol(1)}).toThrowError(Error)
	expect(() => {symbolFunctions.fractionToSymbol(-2)}).toThrowError(Error)
})
