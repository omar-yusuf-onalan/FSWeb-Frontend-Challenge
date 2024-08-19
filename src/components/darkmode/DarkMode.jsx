import styles from "./DarkMode.module.css";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    const {
        darkMode,
        nightMode,
        ellipseContainer,
        smallCircle
    } = styles;

    const { language } = useLanguageContext();

    const pStyle = {
        color: isDarkMode ? "#D9D9D9" : "#777777",
        width: "140px"
    }

    const ellipseContainerStyle = {
        backgroundColor: isDarkMode ? "#3A3A3A" : "#4731D3"
    }

    const circleOneStyle = {
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: "#FFE86E",
        width: "15px",
        height: "16px",
        top: "5px",
        transition: isDarkMode ? "right 0.3s ease" : "left 0.3s ease",
        right: isDarkMode ? "32px" : "6px",
    }

    const circleTwoStyle = {
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: isDarkMode ? "#3A3A3A" : "#E92577",
        width: isDarkMode ? "13px" : "2px",
        height: isDarkMode ? "13px" : "2px",
        right: isDarkMode ? "28px" : "4px",
        top: isDarkMode ? "6px" : "11px"
    }

    return (
        <div className={darkMode}>
            <div className={nightMode}>
                <div className={ellipseContainer} style={ellipseContainerStyle} onClick={toggleDarkMode}>
                    <div style={circleOneStyle}></div>
                    <div className={smallCircle} style={circleTwoStyle}></div>
                </div>
                <p style={pStyle}>
                    {isDarkMode ? language.modeSwitch.lightMode : language.modeSwitch.darkMode}
                </p>
            </div>
        </div>
    );
}

export default DarkMode;
