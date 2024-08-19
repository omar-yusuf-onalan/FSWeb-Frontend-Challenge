import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import DarkMode from "../darkmode/DarkMode.jsx";
import SelectLanguage from "../selectlanguage/SelectLanguage.jsx";
import styles from "./ModeSwitch.module.css";

const ModeSwitch = () => {
    const { isDarkMode } = useDarkModeContext();

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