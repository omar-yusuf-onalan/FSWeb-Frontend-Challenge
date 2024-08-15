import styles from "./Skills.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Skills = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        skills,
        items,
        skill
    } = styles;

    const {language} = useLanguageContext();

    const h1Style = {
        color: isDarkMode ? "#AEBCCF" : "#1F2937",
    }

    const h2Style = {
        color: isDarkMode ? "#B7AAFF" : "#4338CA",
    }

    const pStyle = {
        color: isDarkMode ? "#FFFFFF" : "#6B7280",
    }

    return (
        <div className={skills}>
            <h1 style={h1Style}>{language.skills.title}</h1>

            <div className={items}>

                <div className={skill}>

                    <h2 style={h2Style}>Java Script</h2>
                    <p style={pStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div className={skill}>

                    <h2 style={h2Style}>React.Js</h2>
                    <p style={pStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>

                </div>
                <div className={skill}>

                    <h2 style={h2Style}>Node.Js</h2>
                    <p style={pStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>

                </div>
            </div>
        </div>
    )
}

export default Skills;