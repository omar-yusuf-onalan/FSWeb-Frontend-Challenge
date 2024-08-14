import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import darkStyles from "./Hero.dark.module.css";
import lightStyles from "./Hero.light.module.css";
import Button from "../button/Button.jsx";

const Hero = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        hero,
        buttons
    } = styles;

    const {language} = useLanguageContext();

    return (
        <div className={hero}>
            <div>

                <p>-------------------- Almila Su</p>

                <p>{language.hero.text1}</p>
                <p>{language.hero.text2}</p>

                <div className={buttons}>
                    <Button
                        hasBorder={true}
                        width={131}
                        height={52}
                        content={language.hero.hireMeButton}
                    />
                    <Button
                        hasBorder={true}
                        width={131}
                        height={52}
                        content={"Github"}
                    />
                    <Button
                        hasBorder={true}
                        width={131}
                        height={52}
                        content={"Linkedin"}
                    />
                </div>

            </div>

            <img />
        </div>
    )
}

export default Hero;