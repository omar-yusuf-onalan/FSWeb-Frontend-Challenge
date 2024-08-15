import styles from "./Profile.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Profile = () => {
    const { isDarkMode } = useDarkModeContext();

    const {
        profileAndAboutMe,
        profile,
        profileDetails,
        items,
        item,
        aboutMe
    } = styles;

    const {language} = useLanguageContext();

    const h1Style = {
        color: isDarkMode ? "#AEBCCF" : "#1F2937",
    }

    const h2Style = {
        color: isDarkMode ? "#B7AAFF" : "#4338CA",
    }

    const spanStyle = {
        color: isDarkMode ? "#FFFFFF" : "#000000",
    }

    const pStyle = {
        color: isDarkMode ? "#FFFFFF" : "#6B7280",
    }

    return (
        <div className={profileAndAboutMe}>
            <h1 style={h1Style}>{language.profile.title}</h1>

            <div className={profile}>

                <div className={profileDetails}>
                    <h2 style={h2Style}>{language.profile.profile}</h2>

                    <div className={items}>

                        <div className={item}>
                            <span style={{...spanStyle, fontWeight: "bold"}}>{language.profile.dateOfBirth[0]}</span>
                            <span style={spanStyle}>{language.profile.dateOfBirth[1]}</span>
                        </div>

                        <div className={item}>
                            <span style={{...spanStyle, fontWeight: "bold"}}>{language.profile.livingIn[0]}</span>
                            <span style={spanStyle}>{language.profile.livingIn[1]}</span>
                        </div>

                        <div className={item}>
                            <span style={{...spanStyle, fontWeight: "bold"}}>{language.profile.education[0]}</span>
                            <span style={spanStyle}>{language.profile.education[1]}</span>
                        </div>

                        <div className={item}>
                            <span style={{...spanStyle, fontWeight: "bold"}}>{language.profile.preferredRole[0]}</span>
                            <span style={spanStyle}>{language.profile.preferredRole[1]}</span>
                        </div>

                    </div>
                </div>

                <div className={aboutMe}>

                    <h2 style={h2Style}>{language.profile.aboutMe}</h2>

                    <div>

                        <p style={pStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>

                        <p style={pStyle}>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Profile;