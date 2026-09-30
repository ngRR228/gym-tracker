import { useLocation } from "react-router-dom"
import styles from "./TrainigDay.module.css"
import benchPress from "../../shared/assets/gymMachines/benchPress.png"
import { useState } from "react"
import type { WorkoutDay } from "../../shared/types/WorkoutDay"
export default function TrainigDay () {

    const location = useLocation()
    const { day } = location.state || {}
// fetch
console.log(day);
// weight , rest time and etc
// assign workout type , make it work with 2 exercises , merge workout into workoutDay
// pass the workoutDay to backend , make delete/add/find functions , connect db
const[workout , setWorkout] = useState<string[]>()
const[workoutDay , setWorkoutDay] = useState<WorkoutDay>({
        calendarDay: day.calendarDay ,
        month: day.month ,
        year: day.year,
        id: `${day.year}-${day.month}-${day.calendarDay}` ,
        workout: [{exercise: "bench press" , sets: 3 , reps: 8} , {exercise:"biceps curls", sets: 2 , reps: 10}]})


   // let example =
    //  {day: day , workout: [{exercise: "bench press" , sets: 3 , reps: 8} , {exercise:"biceps curls", sets: 2 , reps: 10}]}
    console.log(workoutDay);
    
    return (
        <>
        <h1>TrainigDay {day.year} {day.month} {day.calendarDay}</h1>
        <div className={styles.exercise}>
            <p>exercise name</p>
            <img src={benchPress} alt="" />
        </div>
        </>
    )
}