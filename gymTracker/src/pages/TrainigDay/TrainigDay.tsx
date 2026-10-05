import { useLocation } from "react-router-dom"
import styles from "./TrainigDay.module.css"
import { useEffect, useState } from "react"
import type { WorkoutDay } from "../../shared/types/WorkoutDay"
import type { Workout } from "../../shared/types/Workout"
import benchPress from "../../shared/assets/gymMachines/benchPress.png"

export default function TrainigDay () {

const location = useLocation()
const { day } = location.state || {}
const[workout , setWorkout] = useState<Workout[]>
//{setNumber: 2 , reps: 3 }
([{id: 1 , exercise: "bench press" , exerciseImg:benchPress ,  sets:[{setNumber: 1 , reps: 10 }]}] )
//([{id: 1 , exercise: "bench press" , exerciseImg:benchPress ,  sets:[]}])
console.log(workout);

const[workoutDay , setWorkoutDay] = useState<WorkoutDay>({
        calendarDay: day.calendarDay ,
        month: day.month ,
        year: day.year,
        id: `${day.year}-${day.month}-${day.calendarDay}` ,
        workout: workout
})

function addSet (currentWorkout: Workout ):Workout[] {
  let newArr =  currentWorkout.sets.map((w) => { 
         console.log(w.setNumber);
     return w.setNumber
    })
let newId = Math.max(...newArr) + 1
let meow = workout.map((w) => {
    if(currentWorkout.id === w.id) {
        setWorkout([{...currentWorkout  , sets:[...currentWorkout.sets , {setNumber: newId  , reps: 11} ]}])
        return workout
    }
})
    return 
}

function updateReps (w:Workout  , setNum : number , inputValueAsNumber: number) {
       let res = w.sets.map((s) => {
            console.log(s);
            if(s.setNumber === setNum){
                return {...s , reps: inputValueAsNumber}
                
            } else {
                return s
            }
            
        })
        setWorkout([{...w , sets: res}])
        return res
}

    return (
        <>
        <h1>TrainigDay {day.year} {day.month} {day.calendarDay}</h1>
        <div className={styles.todaysProgram}>

            <input type="text" className={styles.exerciesList} />

        {workout.map((w) => (
            <ul key={w.id} className={styles.exerciseDiv}>
                <li>{w.exercise}</li>
                <li><img src={w.exerciseImg} alt="" className={styles.exerciseImg} /></li>
                <div className={styles.setNumberAndReps}>
                <li><button onClick={() => addSet(w)}>add set</button></li>
                <li>{w.sets.map((set) => (
                    <div className="" key={set.setNumber} >
                        <p>test reps{set.reps}</p>
                    <p>set number: {set.setNumber}</p>
                    <input type="number" value={set.reps} onChange={(e) => updateReps(w , set.setNumber ,  e.target.valueAsNumber)
                        // updateReps(w, set , set.setNumber , set.reps , e.target.valueAsNumber)
                         }/>
                    <button>×</button>


                    </div>
                ))}</li>
                
                </div>
            </ul>
        ))}
        </div>
        </>
    )
}