import styles from "./Header.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Header = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        header,
        logo,
        ellipse,
        nav,
        skills,
        projects,
        hireMe
    } = styles;

    const { language } = useLanguageContext();

    return (
        <div className={header}>
            <div className={logo}>
                <div className={ellipse}>A</div>
            </div>

            <div className={nav}>
                <div className={skills} style={{color: isDarkMode ? "#6B7280" : "black"}}>
                    {language.header.skills}
                </div>

                <div className={projects} style={{color: isDarkMode ? "#6B7280" : "black"}}>
                    {language.header.projects}
                </div>

                <div className={hireMe} style={{backgroundColor: isDarkMode ? "white" : ""}}>
                    {language.header.hireMe}
                </div>
            </div>
        </div>
    )
}

export default Header;

