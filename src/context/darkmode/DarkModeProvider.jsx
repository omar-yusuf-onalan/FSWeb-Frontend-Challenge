import DarkModeContext from "./DarkModeContext.jsx";
import useDarkMode from "../../hooks/useDarkMode.jsx";

const DarkModeProvider = ({children}) => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;