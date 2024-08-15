import styles from "./Footer.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Footer = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        footer,
        descriptionContainer,
        emailAndLinks,
        email,
        links
    } = styles;

    const {language} = useLanguageContext();

    const h1Style = {
        color: isDarkMode ? "#AEBCCF" : "#1F2937",
    }

    const emailStyle = {
        color: isDarkMode ? "#BAB2E7" : "#AF0C48",
    }

    const blogStyle = {
        color: isDarkMode ? "#E1E1FF" : "#0A0A14"
    }

    const githubStyle = {
        color: isDarkMode ? "#17D18B" : "#00AB6B"
    }

    const linkedinStyle = {
        color: isDarkMode ? "#0BA6F7" : "#0077B5"
    }

    return (
        <div className={footer}>
            <div className={descriptionContainer}>
                <h1 style={h1Style}>{language.footer.description}</h1>
            </div>

            <div className={emailAndLinks}>
                <span className={email} style={emailStyle}>👉 almilasucode@gmail.com</span>

                <div className={links}>
                    <span style={blogStyle}>{language.footer.personalBlog}</span>
                    <span style={githubStyle}>Github</span>
                    <span style={linkedinStyle}>Linkedin</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;