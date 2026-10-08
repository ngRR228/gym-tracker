import type { Exercise } from "./Exercise"
import type { Set } from "./Set"
export interface Workout extends Exercise {
    // id: number
    // exercise: string ,
    // exerciseImg: string ,
    sets: Set[]
}
