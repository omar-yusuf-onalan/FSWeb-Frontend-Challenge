import darkStyles from "./Profile.dark.module.css";
import lightStyles from "./Profile.light.module.css";
import useDarkModeContext from "../../context/darkmode/useDarkModeContext.jsx";
import useLanguageContext from "../../context/language/useLanguageContext.jsx";

const Profile = () => {
    const { isDarkMode } = useDarkModeContext();

    const styles = isDarkMode ? darkStyles : lightStyles;

    const {language} = useLanguageContext();

    return (
        <div>
            <h1>{language.profile.title}</h1>

            <div>

                <div>
                    <h3>{language.profile.profile}</h3>

                    <div>

                        <div>
                            <span>{language.profile.dateOfBirth[0]}</span>
                            <span>{language.profile.dateOfBirth[1]}</span>
                        </div>

                        <div>
                            <span>{language.profile.livingIn[0]}</span>
                            <span>{language.profile.livingIn[1]}</span>
                        </div>

                        <div>
                            <span>{language.profile.education[0]}</span>
                            <span>{language.profile.education[1]}</span>
                        </div>

                        <div>
                            <span>{language.profile.preferredRole[0]}</span>
                            <span>{language.profile.preferredRole[1]}</span>
                        </div>


                    </div>
                </div>

                <div>

                    <h3>{language.profile.aboutMe}</h3>

                    <div>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>

                        <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Profile;