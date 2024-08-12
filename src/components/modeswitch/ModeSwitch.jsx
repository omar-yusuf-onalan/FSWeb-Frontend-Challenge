import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import DarkMode from "../darkmode/DarkMode.jsx";
import SelectLanguage from "../selectlanguage/SelectLanguage.jsx";
import darkStyles from "./ModeSwitch.dark.module.css";
import lightStyles from "./ModeSwitch.light.module.css";

const ModeSwitch = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        modeSwitch
    } = styles;

    return (
        <div className={modeSwitch}>

            <DarkMode />

            {" | "}

            <SelectLanguage />
        </div>
    )
}

export default ModeSwitch;