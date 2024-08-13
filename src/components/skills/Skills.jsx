import darkStyles from "./Skills.dark.module.css";
import lightStyles from "./Skills.light.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Skills = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const language = useLanguageContext();

    return (
        <div>
            <h1>{language.skills.title}</h1>

            <div>

                <div>

                    <h2>Java Script</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div>

                    <h2>React.Js</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>

                </div>
                <div>

                    <h2>Node.Js</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>

                </div>
            </div>
        </div>
    )
}

export default Skills;