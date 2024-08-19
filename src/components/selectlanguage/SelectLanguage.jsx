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

    const trueColoredStyle = {
        color: isDarkMode ? "#BAB2E7" : "#4731D3"
    }

    const falseColoredStyle = {
        color: "#777777"
    }

    return (
        <div className={selectLanguage}>
            <p className={text} onClick={toggleLanguage}>
                <span style={language.modeSwitch.switchLanguage[0].colored ? trueColoredStyle : falseColoredStyle}>
                    {language.modeSwitch.switchLanguage[0].text}
                </span>
                <span style={language.modeSwitch.switchLanguage[1].colored ? trueColoredStyle : falseColoredStyle}>
                    {language.modeSwitch.switchLanguage[1].text}
                </span>
            </p>
        </div>
    )
}

export default SelectLanguage;