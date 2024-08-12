
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import darkStyles from "./Button.dark.module.css";
import lightStyles from "./Button.light.module.css";

const Button = ({hasBorder, width, height, content}) => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const language = useLanguageContext();

    return (
        <div>
            {content}
        </div>
    )
}

export default Button;