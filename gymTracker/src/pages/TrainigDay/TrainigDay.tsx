import { useLocation } from "react-router-dom"


export default function TrainigDay () {

    const location = useLocation()
    const { day } = location.state || {}

console.log(day);


    
    return (
        <h1>TrainigDay {day.year} {day.month} {day.calendarDay}</h1>


    )
}