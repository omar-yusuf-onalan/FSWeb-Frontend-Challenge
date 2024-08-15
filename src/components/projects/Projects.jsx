import styles from "./Projects.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import workintech from "../../assets/workintech.png";
import randomJokes from "../../assets/random-jokes.png";
import journey from "../../assets/journey.png";

const Projects = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        projects,
        cards,
        card,
        buttons,
        links
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

    const buttonStyle = {
        color: isDarkMode ? "#8F88FF" : "#3730A3",
        background: isDarkMode ? "#383838" : "#FFFFFF",
        border: isDarkMode ? "1px solid #8F88FF" : "1px solid #3730A3"
    }

    const spanStyle = {
        color: isDarkMode ? "#E1E1FF" : "#3730A3"
    }

    return (
        <div className={projects}>
            <h1 style={h1Style}>{language.projects.title}</h1>

            <div className={cards}>

                <div className={card}>
                    <img alt="workintech" src={workintech}/>

                    <h2 style={h2Style}>{language.projects.projects[0].title}</h2>
                    <p style={pStyle}>{language.projects.projects[0].description}</p>

                    <div className={buttons}>

                        <div style={buttonStyle}>
                            react
                        </div>

                        <div style={buttonStyle}>
                            redux
                        </div>

                        <div style={buttonStyle}>
                            axios
                        </div>

                    </div>

                    <div className={links}>
                        <span style={spanStyle}>Github</span>
                        <span style={spanStyle}>{language.projects.viewSite}</span>
                    </div>

                </div>

                <div className={card}>
                    <img alt="random jokes" src={randomJokes}/>

                    <h2 style={h2Style}>{language.projects.projects[1].title}</h2>
                    <p style={pStyle}>{language.projects.projects[1].description}</p>

                    <div className={buttons}>
                        <div style={buttonStyle}>
                            react
                        </div>

                        <div style={buttonStyle}>
                            redux
                        </div>

                        <div style={buttonStyle}>
                            axios
                        </div>
                    </div>

                    <div className={links}>
                        <span style={spanStyle}>Github</span>
                        <span style={spanStyle}>{language.projects.viewSite}</span>
                    </div>

                </div>

                <div className={card}>
                    <img alt="journey" src={journey}/>

                    <h2 style={h2Style}>{language.projects.projects[2].title}</h2>
                    <p style={pStyle}>{language.projects.projects[2].description}</p>

                    <div className={buttons}>
                        <div style={buttonStyle}>
                            react
                        </div>

                        <div style={buttonStyle}>
                            redux
                        </div>

                        <div style={buttonStyle}>
                            axios
                        </div>
                    </div>

                    <div className={links}>
                        <span style={spanStyle}>Github</span>
                        <span style={spanStyle}>{language.projects.viewSite}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects;