import type { CalendarDay } from "./CalendarDay"

export type WorkoutDay = CalendarDay & {
    calendarDay: number,
    month: string,
    year: number,
    id: number | string
    workout: string & number
    // exercise: string ,
    // sets: number ,
    // reps: number 
}

