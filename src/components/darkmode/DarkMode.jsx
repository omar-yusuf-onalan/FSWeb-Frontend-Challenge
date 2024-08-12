import darkStyles from './DarkMode.dark.module.css';
import lightStyles from './DarkMode.light.module.css';
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        darkMode,
        nightMode,
        rectangleOne,
        ellipseOne,
        ellipseTwo,
        text
    } = styles;

    const { language } = useLanguageContext();

    return (
        <div className={darkMode}>
            <div className={nightMode}>
                <div className={rectangleOne} onClick={toggleDarkMode}>

                </div>
                <div className={ellipseOne}></div>
                <div className={ellipseTwo}></div>

                <p className={text}>{isDarkMode ? language.modeSwitch.lightMode : language.modeSwitch.darkMode}</p>
            </div>
        </div>
    )
}

export default DarkMode;