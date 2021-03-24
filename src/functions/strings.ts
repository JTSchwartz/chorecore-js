export const stringFunctions = {
	capitalize: (alterVal: string): string => {
		return alterVal && alterVal.charAt(0).toUpperCase() + alterVal.slice(1)
	},
	sentenceCase: (alterVal: string): string => {
		return alterVal && alterVal.charAt(0).toUpperCase() + alterVal.slice(1).toLowerCase()
	}
}
