import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import styles from "./Hero.module.css";
import image from "../../assets/almila-su.webp"

const Hero = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        hero,
        left,
        name,
        text1,
        text2,
        buttons,
        hireMe,
        github,
        linkedin,
        img
    } = styles;

    const {language} = useLanguageContext();

    return (
        <div className={hero}>
            <div className={left}>

                <p className={name}><div></div> <span style={{color: isDarkMode ? "#B7AAFF" : "#4338CA"}}>Almila Su</span></p>

                <p className={text1} style={{color: isDarkMode ? "" : "#1F2937"}}>{language.hero.text1}</p>
                <p className={text2} style={{color: isDarkMode ? "" : "#6B7280;"}}>{language.hero.text2}</p>

                <div className={buttons}>

                    <div className={hireMe} style={{color: isDarkMode ? "" : "white",background: isDarkMode ? "" : "#3730A3"}}>
                        {language.hero.hireMeButton}
                    </div>

                    <div className={github} style={{color: isDarkMode ? "" : "#3730A3", border: isDarkMode ? "" : "1px solid #3730A3"}}>
                        Github
                    </div>

                    <div className={linkedin} style={{color: isDarkMode ? "" : "#3730A3", border: isDarkMode ? "" : "1px solid #3730A3"}}>
                        Linkedin
                    </div>
                </div>

            </div>

            <img className={img} alt="almila-su" src={image}/>
        </div>
    )
}

export default Hero;