import {stringFunctions} from "../functions/strings"

test("capitalize", () => {
	expect(stringFunctions.capitalize("hello")).toBe("Hello")
	expect(stringFunctions.capitalize("HELLO")).toBe("HELLO")
	expect(stringFunctions.capitalize("")).toBe("")
})

test("sentenceCase", () => {
	expect(stringFunctions.sentenceCase("hello")).toBe("Hello")
	expect(stringFunctions.sentenceCase("HELLO")).toBe("Hello")
	expect(stringFunctions.sentenceCase("")).toBe("")
})
