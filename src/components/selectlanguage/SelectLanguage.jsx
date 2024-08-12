import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import darkStyles from "./SelectLanguage.dark.module.css";
import lightStyles from "./SelectLanguage.light.module.css";

const SelectLanguage = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        selectLanguage,
        text
    } = styles;

    const { language, toggleLanguage } = useLanguageContext();


    return (
        <div className={selectLanguage}>
            <p className={text} onClick={toggleLanguage}>{language.modeSwitch.switchLanguage}</p>
        </div>
    )
}

export default SelectLanguage;