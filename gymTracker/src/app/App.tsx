
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../pages/Header/Header'
import HomePage from '../pages/HomePage/HomePage'
import Footer from '../pages/Footer/Footer'
import CalendarPage from '../pages/CalendarPage/CalendarPage'
import TrainigDay from '../pages/TrainigDay/TrainigDay'
import ThemeProvider from "../shared/Context/ThemeContext/ThemeContext.tsx"
import { useContext } from 'react'
import { contextTheme } from '../shared/Context/ThemeContext/ThemeContext'

function App() {
//  const{currentTheme , setCurrentTheme} = useContext(contextTheme)
//  console.log(currentTheme);
     const {currentTheme , setCurrentTheme} = useContext(contextTheme)
     console.log(currentTheme);
     
  return (
    <>
      {/* <ThemeProvider> */}
    <div className={currentTheme}>
    <Header />
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path="/:year/:month/:day" element={<TrainigDay />} />

      </Routes>
      <Footer />
    </div>
      {/* </ThemeProvider> */}
       
    </>
  )
}

export default App
