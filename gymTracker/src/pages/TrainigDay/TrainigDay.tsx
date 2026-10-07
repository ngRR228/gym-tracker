import { useLocation } from "react-router-dom"
import styles from "./TrainigDay.module.css"
import { useEffect, useState } from "react"
import type { WorkoutDay } from "../../shared/types/WorkoutDay"
import type { Workout } from "../../shared/types/Workout"
import benchPress from "../../shared/assets/gymMachines/benchPress.png"
import type { Set } from "../../shared/types/Set"

export default function TrainigDay () {

const location = useLocation()
const { day } = location.state || {}
const[workout , setWorkout] = useState<Workout[] | []>
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
    let newArr = 
    currentWorkout.sets.map((w) => { 
    console.log("map sets" , w.setNumber);
    return w.setNumber
    }) 
     
let newId = newArr.length >= 1 ?  Math.max(...newArr) + 1 : 1
console.log(newId)

let meow = workout.map((w) => {
    if(currentWorkout.id === w.id) {
        setWorkout([{...currentWorkout  , sets:[...currentWorkout.sets , {setNumber: newId  } ]}])
        return workout
    }
})
    return 
}

function updateReps (w:Workout  , setNum : number , inputValueAsNumber: number) {
    console.log("updt");
    let res = w.sets.map((s) => {
        if(s.setNumber === setNum){
            console.log(s);
            return {...s , reps: inputValueAsNumber}
        } else {
            return s
        }
    })
    setWorkout([{...w , sets: res}])    
}



function deleteSet (w: Workout , set: Set ) {
 let result = w.sets.filter((s) => set.setNumber !== s.setNumber)
 console.log(result);
 setWorkout([{...w , sets: result}])    
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
                    <div className="" key={set.setNumber}>
                        <p>reps: {typeof set.reps === "number" && !isNaN(set.reps) ? set.reps : "no reps yet"}</p>
                    <p>set number: {set.setNumber }</p>
                    <input type="number" value={set.reps} onChange={(e) => updateReps(w , set.setNumber ,  e.target.valueAsNumber)
                         }/>
                    <button onClick={() => deleteSet(w , set) } >×</button>


                    </div>
                ))}</li>
                
                </div>
            </ul>
        ))}
        </div>
        </>
    )
}