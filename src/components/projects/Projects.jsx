import darkStyles from "./Projects.dark.module.css";
import lightStyles from "./Projects.light.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import Button from "../button/Button.jsx";

const Projects = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        cards,
        card,
        buttons,
        links
    } = styles;

    const {language} = useLanguageContext();

    return (
        <div>
            <h1>{language.projects.title}</h1>

            <div className={cards}>

                <div className={card}>
                    <img/>

                    <h3>{language.projects.projects[0].title}</h3>
                    <p>{language.projects.projects[0].description}</p>

                    <div className={buttons}>
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"react"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"redux"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"axios"}
                        />
                    </div>

                    <div className={links}>
                        <span>Github</span>
                        <span>{language.projects.viewSite}</span>
                    </div>

                </div>

                <div className={card}>
                    <img/>

                    <h3>{language.projects.projects[0].title}</h3>
                    <p>{language.projects.projects[0].description}</p>

                    <div className={buttons}>
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"react"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"redux"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"axios"}
                        />
                    </div>

                    <div className={links}>
                        <span>Github</span>
                        <span>{language.projects.viewSite}</span>
                    </div>

                </div>

                <div className={card}>
                    <img/>

                    <h3>{language.projects.projects[0].title}</h3>
                    <p>{language.projects.projects[0].description}</p>

                    <div className={buttons}>
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"react"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"redux"}
                        />
                        <Button
                            hasBorder={true}
                            width={131}
                            height={52}
                            content={"axios"}
                        />
                    </div>

                    <div className={links}>
                        <span>Github</span>
                        <span>{language.projects.viewSite}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects;