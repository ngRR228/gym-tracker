
import {  Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from '../pages/Header/Header'
import HomePage from '../pages/HomePage/HomePage'
import Footer from '../pages/Footer/Footer'
import CalendarPage from '../pages/CalendarPage/CalendarPage'
import TrainigDay from '../pages/TrainigDay/TrainigDay'

function App() {
  //  const navigate = useNavigate()
 //  navigate(`/${day.year}/${day.month}/${day.calendarDay}` , {state: {day: day}})

  return (
    <>
      
    <Header />
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/calendar' element={<CalendarPage />} />
         {/* <Route path={`/${day.year}/${day.month}/${day.calendarDay}`} element={<TrainigDay/>} />
         <Route path="/:year/:month/:day" element={<CalendarPage />} /> */}
      </Routes>
      <Footer />
    
    </>
  )
}

export default App
