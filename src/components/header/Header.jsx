import darkStyles from "./Header.dark.module.css";
import lightStyles from "./Header.light.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";
import Button from "../button/Button.jsx";


const Header = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {
        header,
        logo,
        text,
        ellipse,
        nav
    } = styles;

    const { language } = useLanguageContext();

    return (
        <div className={header}>
            <div className={logo}>
                <p className={text}></p>
                <div className={ellipse}></div>
            </div>

            <div className={nav}>
                <Button
                    hasBorder={false}
                    width={131}
                    height={52}
                    content={language.header.skills}
                />

                <Button
                    hasBorder={false}
                    width={131}
                    height={52}
                    content={language.header.projects}
                />

                <Button
                    hasBorder={true}
                    width={131}
                    height={52}
                    content={language.header.hireMe}
                />

            </div>
        </div>
    )
}

export default Header;