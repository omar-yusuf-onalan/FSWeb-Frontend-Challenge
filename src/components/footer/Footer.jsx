import darkStyles from "./Footer.dark.module.css";
import lightStyles from "./Footer.light.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Footer = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {language} = useLanguageContext();

    return (
        <div>
            <div>
                <div>
                    <h1>{language.footer.description}</h1>
                </div>
            </div>

            <div>
                <span>👉 almilasucode@gmail.com</span>

                <div>
                    <span>{language.footer.personalBlog}</span>
                    <span>Github</span>
                    <span>Linkedin</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;