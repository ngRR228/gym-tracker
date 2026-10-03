import { createContext , useState } from "react"

export const contextTheme = createContext(null)

export default function ThemeProvider ({children}) {
const[currentTheme , setCurrentTheme] = useState<string>("light")

    return (
       <contextTheme.Provider value={{currentTheme , setCurrentTheme}}>
            {children}
       </contextTheme.Provider>
    )
}