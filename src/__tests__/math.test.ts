import {mathFunctions} from "../functions/math"

test("closest", () => {
	expect(mathFunctions.closest(8, [1, 7, 3, 5, 10])).toBe(7)
	expect(mathFunctions.closest(0.125, [-1, 4, 7, 8])).toBe(-1)
	expect(mathFunctions.closest(1, [0, 0.5, 2])).toBe(0.5)
})

test("stringToFraction", () => {
	expect(mathFunctions.parseFractionString("1/2")).toBe(0.5)
	expect(mathFunctions.parseFractionString("3/2")).toBe(1.5)
	expect(mathFunctions.parseFractionString("3/4")).toBe(0.75)
	expect(mathFunctions.parseFractionString("1/8")).toBe(0.125)
	expect(mathFunctions.parseFractionString("7/5")).toBe(1.4)
})
