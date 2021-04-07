export const conditionalFunctions = {
	isEven: (testVal: number, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal % 2 === 0) return returnVal
		return elseVal
	},
	isEqual: (originalVal: any, testVal: any, returnVal: any = originalVal, sameType = true, elseVal = ""): any => {
		if (sameType) {
			if (originalVal === testVal) return returnVal
		} else if (originalVal == testVal) return returnVal
		return elseVal
	},
	isFalse: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (!testVal) return returnVal
		return elseVal
	},
	isGT: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any => {
		if (originalVal > testVal) return returnVal
		return elseVal
	},
	isGTE: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any => {
		if (originalVal >= testVal) return returnVal
		return elseVal
	},
	isLT: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any => {
		if (originalVal < testVal) return returnVal
		return elseVal
	},
	isLTE: (originalVal: any, testVal: any, returnVal: any = originalVal, elseVal = ''): any => {
		if (originalVal <= testVal) return returnVal
		return elseVal
	},
	isNotEqual: (originalVal: any, testVal: any, returnVal: any = originalVal, sameType = true, elseVal: any = ""): any => {
		if (sameType) {
			if (originalVal !== testVal) return returnVal
		} else if (originalVal != testVal) return returnVal
		return elseVal
	},
	isNotNull: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal !== null) return returnVal
		return elseVal
	},
	isNotUndefined: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal !== undefined) return returnVal
		return elseVal
	},
	isNull: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal === null) return returnVal
		return elseVal
	},
	isOdd: (testVal: number, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal % 2 !== 0) return returnVal
		return elseVal
	},
	isTrue: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal) return returnVal
		return elseVal
	},
	isUndefined: (testVal: any, returnVal: any = testVal, elseVal: any = ""): any => {
		if (testVal === undefined) return returnVal
		return elseVal
	},
}
