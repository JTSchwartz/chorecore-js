export const conditionalFunctions = {
	isEven: (testVal: number, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal % 2 === 0) return returnVal
		return elseVal
	},
	isEqual: (originalVal: any, testVal: any, returnVal: any, sameType = true, elseVal = ""): typeof elseVal => {
		if (sameType) {
			if (originalVal === testVal) return returnVal
		} else if (originalVal == testVal) return returnVal
		return elseVal
	},
	isFalse: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (!testVal) return returnVal
		return elseVal
	},
	isNotEqual: (originalVal: any, testVal: any, returnVal: any, sameType = true, elseVal: any = ""): typeof elseVal => {
		if (sameType) {
			if (originalVal !== testVal) return returnVal
		} else if (originalVal != testVal) return returnVal
		return elseVal
	},
	isNotNull: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal !== null) return returnVal
		return elseVal
	},
	isNotUndefined: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal !== undefined) return returnVal
		return elseVal
	},
	isNull: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal === null) return returnVal
		return elseVal
	},
	isOdd: (testVal: number, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal % 2 !== 0) return returnVal
		return elseVal
	},
	isTrue: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal) return returnVal
		return elseVal
	},
	isUndefined: (testVal: any, returnVal: any, elseVal: any = ""): typeof elseVal => {
		if (testVal === undefined) return returnVal
		return elseVal
	},
}
