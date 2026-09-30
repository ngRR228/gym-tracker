import { useEffect, useState } from "react"
import styles from "./CalendarPage.module.css"
import { useNavigate } from "react-router-dom";
import type { CalendarDay } from "../../shared/types/CalendarDay";


export default function CalendarPage () {

    const months: string[] = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];


const[mark, setMark] = useState<number[]>([])
const [currentDay , setCurrentDay] = useState<Date>(new Date())
const[currentMonthNumberState , setCurrentMonthNumber] = useState<number>(currentDay.getMonth())
const[currentYearNumberState , setCurrentYearNumber] = useState<number>(currentDay.getFullYear())
// let currentMonthNumber =  currentDay.getMonth() 
// console.log(currentMonthNumber);
console.log(currentYearNumberState);

const currentMonth = months[currentMonthNumberState] 
console.log(currentMonth);

const[days, setDays] = useState<CalendarDay[]>([])
// let year = currentDay.getFullYear()
// let month: string = currentMonth
let calendarDay = currentDay.getDate()

function generateDays (year, currentMonthNumberState, ): CalendarDay[] {
 let month: string = months[currentMonthNumberState]
let daysAmount = []
let daysInMonth = new Date(year , currentMonthNumberState + 1, 0).getDate()
for(let day = 1 ; day <= daysInMonth ; day++){
    daysAmount.push({
        calendarDay: day ,
        month: month ,
        year: year,
        id: `${year}-${month}-${calendarDay}`
    })
}
return daysAmount

}
//console.log(generateDays(currentDay.getFullYear() , currentDay.getMonth()));
useEffect(() => {
setDays(generateDays(currentYearNumberState , currentMonthNumberState))
}, [currentMonthNumberState , currentYearNumberState])


   const navigate =  useNavigate() 

    function markAsDone (day) {
        console.log(day);
        
    if(mark.includes(day)){
    setMark(mark.filter((e) => e !== day))   
    } else{
    setMark([...mark , day.calendarDay])
    }
    console.log(mark);
    
    setTimeout(() => {
   navigate(`/${day.year}/${day.month}/${day.calendarDay}` , {state: {day: day}})
    }, 1000);
    }

    return(
        <>
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
            <button onClick={() => {
       currentMonthNumberState === 0 ? setCurrentMonthNumber(11) : setCurrentMonthNumber(prevMonth => prevMonth - 1) 
        }}>prev month</button>
        <button onClick={() => {
           currentMonthNumberState === 11 ? setCurrentMonthNumber(0) : setCurrentMonthNumber(currentMonth => currentMonth + 1)
        }}>next month</button>
        <button onClick={() => {
            setCurrentMonthNumber(new Date().getMonth())
                setCurrentYearNumber(new Date().getFullYear())
        }}>return to current date</button>

        <div className={styles.calendar}>
            {days.map((day) => (
                <ul key={day.calendarDay}>
                    <li className={styles.number}>
                        <button className={`${styles.buttonMark}  ${mark.includes(day.calendarDay) ? styles.marked : ""}`}
                         onClick={() => {
                            markAsDone(day)
                         }}>{day.calendarDay}</button>
                        </li>
                         <li>{day.month}</li>
                </ul>
            ))}

        </div>
        </>
    )
}