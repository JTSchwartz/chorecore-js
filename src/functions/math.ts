export const mathFunctions = {
	closest: (needle: number, arr: number[]): number => {
		return arr.reduce((a, b) => {
			return Math.abs(b - needle) < Math.abs(a - needle) ? b : a
		})
	},
	parseFractionString: (fraction: string): number => {
		const split = fraction.split("/")
		return +split[0] / +split[1]
	}
}
