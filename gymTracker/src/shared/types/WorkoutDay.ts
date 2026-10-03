import type { CalendarDay } from "./CalendarDay"
import type { Workout } from "./Workout"
export type WorkoutDay = CalendarDay & {
    calendarDay: number;
    month: string;
    year: number;
    id: number | string;
    
    workout: Workout[] ;
}

