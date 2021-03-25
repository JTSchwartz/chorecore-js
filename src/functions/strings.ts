const replaceAll = (str: string, original: string, replacement: string): string => {
	return str.split(original).join(replacement)
}

export const stringFunctions = {
	capitalize: (alterVal: string): string => {
		return alterVal && alterVal.charAt(0).toUpperCase() + alterVal.slice(1)
	},
	replaceAll: replaceAll,
	replacementMap: (str: string, map: {[key: string]: string}): string => {
		for (let key of Object.keys(map)) replaceAll(str, key, map[key])
		return str
	},
	sentenceCase: (alterVal: string): string => {
		return alterVal && alterVal.charAt(0).toUpperCase() + alterVal.slice(1).toLowerCase()
	}
}
