import useLanguage from "../../hooks/useLanguage.jsx";
import LanguageContext from "./LanguageContext.jsx";

const LanguageProvider = ({children}) => {
    const [language, toggleLanguage] = useLanguage();

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;