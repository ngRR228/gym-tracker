import { useEffect, useState } from "react"
import styles from "./CalendarPage.module.css"
import { useNavigate } from "react-router-dom";
import type { CalendarDay } from "../../shared/types/CalendarDay";


export default function CalendarPage () {

  

    const months: string[] = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];


const[mark, setMark] = useState<number[] | string[]>([])
const [currentDay ] = useState<Date>(new Date())
const[currentMonthNumberState , setCurrentMonthNumber] = useState<number>(currentDay.getMonth())
const[currentYearNumberState , setCurrentYearNumber] = useState<number>(currentDay.getFullYear())
const[days, setDays] = useState<CalendarDay[]>([])

   const navigate =  useNavigate() 

const currentMonth = months[currentMonthNumberState] 


function generateDays (year, currentMonthNumberState, ): CalendarDay[] {
 let month: string = months[currentMonthNumberState]
let daysAmount = []
let daysInMonth = new Date(year , currentMonthNumberState + 1, 0).getDate()
for(let day = 1 ; day <= daysInMonth ; day++){
    daysAmount.push({
        calendarDay: day ,
        month: month ,
        year: year,
        id: `${year}-${month}-${day}`
    })
}
return daysAmount

}
useEffect(() => {
setDays(generateDays(currentYearNumberState , currentMonthNumberState))
}, [currentMonthNumberState , currentYearNumberState])

function addMarkedDays () {
const saved = localStorage.getItem("marked")
let markedArr = 
//JSON.parse(saved) ? 
saved ? JSON.parse(saved)  : []
let daysToChange = markedArr.map((d) => d.id )
console.log("days to change" , daysToChange)

setMark([...mark, ...daysToChange])
}
useEffect(() => {
addMarkedDays()
}, [])

console.log(mark);



    function conveyDay (day) {
        console.log(day);    
    setTimeout(() => {
   navigate(`/${day.year}/${day.month}/${day.calendarDay}` , {state: {day: day}})
    }, 1000);
    }

    return(
        <div className={styles.page}>
        <h1>calendar</h1>
        <p>year: {currentYearNumberState}</p>

        <div className={styles.btn }>
        <button onClick={() => {
        setCurrentYearNumber(prevYear => prevYear - 1)
        }}>show prev year</button>
         <button onClick={() => {
            setCurrentYearNumber (currentYear => currentYear  + 1 )
         }}>show next year</button>
        </div>

        <p>month:{currentMonth}</p>
            <button className={styles.controls} onClick={() => {
       currentMonthNumberState === 0 ? setCurrentMonthNumber(11) : setCurrentMonthNumber(prevMonth => prevMonth - 1) 
        }}>prev month</button>
        <button className={styles.controls} onClick={() => {
           currentMonthNumberState === 11 ? setCurrentMonthNumber(0) : setCurrentMonthNumber(currentMonth => currentMonth + 1)
        }}>next month</button>
        <button className={styles.controls} onClick={() => {
            setCurrentMonthNumber(new Date().getMonth())
                setCurrentYearNumber(new Date().getFullYear())
        }}>return to current date</button>

        <div className={styles.calendar}>
            {days.map((day) => (
                <ul key={day.calendarDay}>
                    <li className={styles.number}>
                       
                        <button className={`${styles.buttonMark}  ${mark.includes(day.id) ? styles.marked : ""}`}
                         onClick={() => {
                            conveyDay(day)
                         }}
                         >{day.calendarDay}</button>
                        </li>
                         <li>{day.month}</li>
                </ul>
            ))}

        </div>
        </div>
    )
}
