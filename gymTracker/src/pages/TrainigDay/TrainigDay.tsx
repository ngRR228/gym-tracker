import { useLocation } from "react-router-dom"


export default function TrainigDay () {

    const location = useLocation()
    const { day } = location.state || {}



    
    return (
        <h1>TrainigDay 1</h1>


    )
}