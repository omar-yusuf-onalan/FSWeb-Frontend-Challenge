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

    const hireMeStyle = {
        color: isDarkMode ? "#000000" : "#FFFFFF",
        background: isDarkMode ? "#E1E1FF" : "#3730A3"
    }

    const githubStyle = {
        color: isDarkMode ? "#E1E1FF" : "#3730A3",
        background: isDarkMode ? "#383838" : "#FFFFFF",
        border: isDarkMode ? "1px solid #E1E1FF" : "1px solid #3730A3"
    }

    const linkedinStyle = {
        color: isDarkMode ? "#E1E1FF" : "#3730A3",
        background: isDarkMode ? "#383838" : " #FFFFFF",
        border: isDarkMode ? "1px solid #E1E1FF" : "1px solid #3730A3"
    }

    return (
        <div className={hero}>
            <div className={left}>

                <p className={name}><div></div> <span style={{color: isDarkMode ? "#B7AAFF" : "#4338CA"}}>Almila Su</span></p>

                <p className={text1} style={{color: isDarkMode ? "#AEBCCF" : "#1F2937"}}>{language.hero.text1}</p>
                <p className={text2} style={{color: isDarkMode ? "#FFFFFF" : "#6B7280"}}>{language.hero.text2}</p>

                <div className={buttons}>

                    <div
                        className={hireMe} style={hireMeStyle}>
                        {language.hero.hireMeButton}
                    </div>

                    <div className={github} style={githubStyle}>
                        Github
                    </div>

                    <div className={linkedin} style={linkedinStyle}>
                        Linkedin
                    </div>
                </div>

            </div>

            <img className={img} alt="almila-su" src={image}/>
        </div>
    )
}

export default Hero;