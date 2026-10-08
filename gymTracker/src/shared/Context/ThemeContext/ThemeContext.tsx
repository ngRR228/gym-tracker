import { createContext , useEffect, useState } from "react"

export const contextTheme = createContext(null)

export default function ThemeProvider ({children}) {

const[currentTheme , setCurrentTheme] = useState<string>(() => {
    const saved = localStorage.getItem("theme")
    return !saved  ? "dark" : saved
})

useEffect(() => {
    localStorage.setItem("theme" , currentTheme)
}, [currentTheme])


    return (
       <contextTheme.Provider value={{currentTheme , setCurrentTheme}}>
            {children}
       </contextTheme.Provider>
    )
}