import { useEffect, useState } from "react"
import styles from "./CalendarPage.module.css"
import { useNavigate } from "react-router-dom";
import type { CalendarDay } from "../../shared/types/Day";
import { useParams } from "react-router-dom";


export default function CalendarPage () {

    const months: string[] = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
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
console.log(currentMonth);

const[days, setDays] = useState<CalendarDay[]>([])
let year = currentDay.getFullYear()
let month: string = currentMonth
let calendarDay = currentDay.getDate()

function generateDays (year , monthNumber): CalendarDay[] {
 let month: string = months[monthNumber]
let daysAmount = []
let daysInMonth = new Date(year , monthNumber + 1, 0).getDate()
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
setDays(generateDays(currentDay.getFullYear() , currentDay.getMonth()))
}, [])

let test1 = new Date (2026 , 4 , 14)


   const navigate =  useNavigate() 

    function markAsDone (day) {
        console.log(day);
        
    if(mark.includes(day)){
    setMark(mark.filter((e) => e !== day))   
    } else{
    setMark([...mark , day])
    }

    setTimeout(() => {
   navigate(`/${day.year}/${day.month}/${day.calendarDay}` , {state: {day: day}})
    }, 1000);
    }


   // const {year , month , day} = useParams()

    return(
        <>
        <h1>calendar</h1>
        <p>month:{currentMonth}</p>
        <div className={styles.calendar}>
            {days.map((day) => (
                <ul key={day.calendarDay}>
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