import {timeFunctions} from "../functions/time"
import * as time from "../constants/time.json"

test("days", () => {
	expect(timeFunctions.days(3.45)).toBe(time.DAY * 3.45)
})

test("hours", () => {
	expect(timeFunctions.hours(6.75)).toBe(time.HOUR * 6.75)
})

test("milliseconds", () => {
	expect(timeFunctions.milliseconds(200)).toBe(time.MILLISECOND * 200)
})

test("minutes", () => {
	expect(timeFunctions.minutes(185.2)).toBe(time.MINUTE * 185.2)
})

test("seconds", () => {
	expect(timeFunctions.seconds(9)).toBe(time.SECOND * 9)
})

test("weeks", () => {
	expect(timeFunctions.weeks(34.6)).toBe(time.WEEK * 34.6)
})
