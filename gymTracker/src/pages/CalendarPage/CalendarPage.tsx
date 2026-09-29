import { useEffect, useState } from "react"
import styles from "./CalendarPage.module.css"
import { useNavigate } from "react-router-dom";
import type { CalendarDay } from "../../shared/types/Day";
export default function CalendarPage () {

    const months: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const calendarDays: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];

const[mark, setMark] = useState<number[]>([])

const [currentDay , setCurrentDay] = useState<Date>(new Date())
const currentMonthNumber =  currentDay.getMonth()
const currentMonth = months[currentMonthNumber]

const[days, setDays] = useState<CalendarDay[]>([])
//{year: currentDay.getFullYear(), month:currentMonth, calendarDay: currentDay.getDate(), id: `${currentDay.getFullYear()}-${currentMonth}-${currentDay.getDate()}` }
//([{calendarDay:1 , month:'september', year:2026, id: 1 } , {calendarDay:2 , month:'september', year:2026, id: 2}, {calendarDay:3 , month:'september', year:2026, id:3},])
let year = currentDay.getFullYear()
let month: string = currentMonth
let calendarDay = currentDay.getDate()
let id = `${currentDay.getFullYear()}-${currentMonth}-${currentDay.getDate()}`

    useEffect(() => {
   setDays ([...days, {year: year, month:month, calendarDay: calendarDay, id: id }])
    }, [])

function generateDays (year , monthNumber ) {
let month: string = months[monthNumber]
let calendarDay = currentDay.getDate()
let id = `${currentDay.getFullYear()}-${currentMonth}-${currentDay.getDate()}`

// setDays(days.map((day) => {
//    day.length > 0 ?  [...day , {year: year, month:month, calendarDay: calendarDay, id: id }] : day
// }))
//setDays([...days , {year: year, month:month, calendarDay: calendarDay, id: id }])


}
console.log(generateDays(currentDay.getFullYear() , currentDay.getMonth()));

//     let dayArr = days.map((day) => day.id)
//     let newId = dayArr.length > 0 ? Math.max(...dayArr) + 1 : 1

//     let caledarDayArr = days.map((day) => day.calendarDay)
//     let newCalendarDay = caledarDayArr.length > 0  ? Math.max(...caledarDayArr) + 1 : 1 

// function addDays (days){
//     // id
//     let dayArr = days.map((day) => day.id)
//     console.log(dayArr);
//     let newId = dayArr.length > 0 ? Math.max(...dayArr) + 1 : 1
//     console.log(newId);

//     // calendarDay
//     let caledarDayArr = days.map((day) => day.calendarDay)
//     let newCalendarDay = caledarDayArr.length > 0  ? Math.max(...caledarDayArr) + 1 : 1 

//     //month

//     //year


//}
//console.log(addDays(days));

//     useEffect(() => {
//    setDays ([...days, {calendarDay: newCalendarDay , month:"september", year:2026, id:newId}])
//     }, [])

// rename const[days, setDays] ,  func that generates days, month , years
// returns a new array with Days


   const navigate =  useNavigate() 

    function markAsDone (day) {
        console.log(day);
        
    if(mark.includes(day)){
    setMark(mark.filter((e) => e !== day))   
    } else{
    setMark([...mark , day])
    }
   // setActive(!active)

    setTimeout(() => {
   navigate(`/${day.year}/${day.month}/${day.calendarDay}` , {state: {day: day}})
    }, 1000);
    }

    //сначала 15–20 минут сам проектируешь решение на бумаге/в коде, 
    // даже если оно кривое → потом приносишь мне и просишь только проверить логику, 
    // без готового решения. Это будет заметно полезнее для обучения.
    
    return(
        <>
        <h1>calendar</h1>
        <p>month:{currentMonth}</p>
        <div className={styles.calendar}>
            {days.map((day) => (
                <ul key={day.id}>
                    <li className={styles.number}>
                        <button className={`${styles.buttonMark} ${mark.includes(day.calendarDay) ? styles.marked : ""}`}
                         onClick={() => {
                            markAsDone(day)
                         }}>{day.calendarDay}</button>
                        </li>
                </ul>
            ))}

        </div>
        </>
    )
}