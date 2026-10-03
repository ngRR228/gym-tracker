import { useContext } from "react";
import { contextTheme } from "../../shared/Context/ThemeContext/ThemeContext";
import styles from "./Header.module.css"

export default function Header () {
    const {currentTheme , setCurrentTheme} = useContext(contextTheme)

    return (
        <>  
        <div className={styles.headerBlock}>
        <h1>Header</h1>
        <p><a href="/calendar">calendar</a></p>
        <p><a href="/">home</a></p>
        <p style={{backgroundColor:currentTheme}}>theme: {currentTheme}</p>
        <button onClick={() => {
        currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
        }}> change theme</button>
        </div>
        
        </>
    )
}