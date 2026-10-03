import { useLocation } from "react-router-dom"
import styles from "./TrainigDay.module.css"
import { useEffect, useState } from "react"
import type { WorkoutDay } from "../../shared/types/WorkoutDay"
import type { Workout } from "../../shared/types/Workout"
import benchPress from "../../shared/assets/gymMachines/benchPress.png"
export default function TrainigDay () {

    const location = useLocation()
    const { day } = location.state || {}

const[workout , setWorkout] = useState<Workout[]>([{id: 1 , exercise: "bench press" , exerciseImg:benchPress ,  sets:[{setNumber: 1 , reps: 3}, {setNumber: 2 , reps: 3}]}])
const[workoutDay , setWorkoutDay] = useState<WorkoutDay>({
        calendarDay: day.calendarDay ,
        month: day.month ,
        year: day.year,
        id: `${day.year}-${day.month}-${day.calendarDay}` ,
        workout: workout
})

// useEffect(() => {
//     setWorkoutDay([...workoutDay , workout ])
// }, [])



console.log(workout[0].exercise);
console.log(workout[0].sets);
console.log(workout.map((w) => w.sets[0]));

function addSet () {

}

    return (
        <>
        <h1>TrainigDay {day.year} {day.month} {day.calendarDay}</h1>
        <div className={styles.todaysProgram}>
        {workout.map((w) => (
            <ul className={styles.exerciseDiv}>
                <li>{w.exercise}</li>
                <li><img src={w.exerciseImg} alt="" className={styles.exerciseImg} /></li>
                <div className={styles.setNumberAndReps}>
                <li>set number:{w.sets[0].setNumber}</li>
                <li>reps{w.sets[0].reps}</li>
                <li><button onClick={() =>
                // setWorkout(prevWorkout =>
                //      [...prevWorkout , {exercise: "bench press" , exerciseImg:benchPress ,  sets:[{setNumber: 2   , reps: 3}] }])
                 console.log("add set!")
                }>add set</button></li>

                
                </div>
            </ul>
        ))}
        </div>
        {/* <div className={styles.exercise}>
            <p>exercise name</p>
            <img src={benchPress} alt="" />
        </div> */}
        </>
    )
}