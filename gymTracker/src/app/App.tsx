
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../pages/Header/Header'
import HomePage from '../pages/HomePage/HomePage'
import Footer from '../pages/Footer/Footer'
import CalendarPage from '../pages/CalendarPage/CalendarPage'
import TrainigDay from '../pages/TrainigDay/TrainigDay'

function App() {
  
  return (
    <>
      
    <Header />
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/1' element={<TrainigDay/>} />
      </Routes>
      <Footer />
    
    </>
  )
}

export default App
