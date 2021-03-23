import * as time from '../constants/time.json';

export const timeFunctions = {
    days: (multiplier: number): number => {
        return multiplier * time.DAY
    },
    hours: (multiplier: number): number => {
        return multiplier * time.HOUR
    },
    milliseconds: (multiplier: number): number => {
        return multiplier
    },
    minutes: (multiplier: number): number => {
        return multiplier * time.MINUTE
    },
    seconds: (multiplier: number): number => {
        return multiplier * time.SECOND
    },
    weeks: (multiplier: number): number => {
        return multiplier * time.WEEK
    }
}
