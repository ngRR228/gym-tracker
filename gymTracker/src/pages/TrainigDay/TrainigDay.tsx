import { useLocation } from "react-router-dom"
import styles from "./TrainigDay.module.css"
import { useState } from "react"
import type { WorkoutDay } from "../../shared/types/WorkoutDay"
import type { Workout } from "../../shared/types/Workout"
import type { Set } from "../../shared/types/Set"
import ButtonMark from "../../components/ButtonMark/ButtonMark"
import ExercisesFinder from "../../components/ExercisesFinder/ExercisesFinder"

export default function TrainigDay () {

const location = useLocation()
const { day } = location.state || {}

const[workout , setWorkout] = useState<Workout[] | []>
([])
//( [ {id: 1 , exercise: "bench press" , exerciseImg:benchPress ,  sets:[{setNumber: 1 , reps: 10 }]} , {id: 2 , exercise:"test" , exerciseImg:benchPress , sets:[{setNumber: 1 , reps: null}]}    ] )

const[workoutDay , setWorkoutDay] = useState<WorkoutDay>({
        calendarDay: day.calendarDay ,
        month: day.month ,
        year: day.year,
        id: `${day.year}-${day.month}-${day.calendarDay}` ,
        workout: workout
})
function addSet (currentWorkout: Workout ):Workout[] {
// to calculate newId ======
    let newArr = 
    currentWorkout.sets.map((w) => { 
    console.log("map sets" , w.setNumber)
    return w.setNumber
    }) 
     
let newId = newArr.length >= 1 ?  Math.max(...newArr) + 1 : 1
console.log(newId)
// =========================
let res =  workout.map((w) => {
    if(currentWorkout.id === w.id) {
        return {...w , sets:[...currentWorkout.sets , {setNumber: newId}]}
    }  else {
        return  {...w}
    }
})
    setWorkout(res)
    return res
}

function updateReps (w:Workout  ,  setNum : number , inputValueAsNumber: number) {
   let result =  workout.map((work) => {
        if(work.id === w.id){
            let setRes =  w.sets.map((s) => {

                if(s.setNumber === setNum){
                    return {...s , reps:inputValueAsNumber}
                } else {
                    return {...s }
                }
            })

            // res
            return {...work , sets: setRes}
        } else {
            return work
        }
    })
    console.log("update result" , result)
 setWorkout(result)
}

// useEffect(() => {
// console.log("u have changed the workout");

// }, [workout , setWorkout])

function deleteExercise (w) {
 let res =  workout.filter((work: Workout) => work.id !== w.id)
    console.log("res" , res);
    setWorkout(res)
}
 
function deleteSet (w: Workout , set: Set ) {
    console.log("chosen w" , w);

let res = workout.map((work) => {
    console.log("w.id" , w);
    console.log("work.id", work);
    
    if(w.id === work.id){
        console.log("if match" , w.sets.filter((s) => set.setNumber !== s.setNumber));     
      return {...w ,  sets:w.sets.filter((s) => set.setNumber !== s.setNumber)}
    } else {
        return {...work}
    }
})
setWorkout(res)
}

function addExercise (exercise) {
    let newExercise = {...exercise , sets:[{setNumber: 1 , reps: null}]}
    setWorkout([...workout , newExercise ])
}
    return (
        <>
        <h1>TrainigDay {day.year} {day.month} {day.calendarDay}</h1>
        <div className={styles.todaysProgram}>
            
            <ExercisesFinder  addExercise={addExercise}/>

            <ButtonMark Day = {day}/>
        
        {workout.map((w) => (
            
            <ul key={w.id} className={styles.exerciseDiv}>
                <li>{w.exercise}</li>
                <li><img src={w.exerciseImg} alt="" className={styles.exerciseImg} /></li>
                <div className={styles.setNumberAndReps}>
                <li><button onClick={() => addSet(w)}>add set</button></li>
                <li>  <button onClick={() => deleteExercise(w)}>delete exercise</button></li>
                <li>{  workout && w.sets.map((set) => (
                    <div className="" key={set.setNumber}>
                            <p>set number: {set.setNumber }</p>
                        <p>reps: {typeof set.reps === "number" && !isNaN(set.reps) ? set.reps : "no reps yet"}</p>
                    <input type="number" value={set.reps} onChange={(e) => updateReps(w , set.setNumber ,  e.target.valueAsNumber)
                         }/>
                    <button onClick={() => deleteSet(w , set) }>×</button>
                            {/* <button onClick={() => deleteExercise(w)}>delete exercise</button> */}

                    </div>
                ))}</li>
                
                </div>
            </ul>
        ))}
        </div>
        </>
    )
}