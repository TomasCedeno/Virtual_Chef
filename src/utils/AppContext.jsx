import React, {useContext, createContext, useState} from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "autumn")

    const toggleTheme = () => {
        const tempTheme = theme === "autumn" ? "dark" : "autumn"

        setTheme(tempTheme)
        localStorage.setItem("theme", tempTheme)
    }

    return (
        <GlobalContext.Provider value={{theme, toggleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;