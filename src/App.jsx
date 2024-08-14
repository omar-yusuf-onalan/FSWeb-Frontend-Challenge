import styles from './App.module.css';
import ModeSwitch from "./components/modeswitch/ModeSwitch.jsx";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/skills/Skills.jsx";
import Profile from "./components/profile/Profile.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";
import useDarkModeContext from "./context/darkmode/useDarkModeContext.jsx";

const {
    app,
    container
} = styles;

const App = () => {
    const {isDarkMode } = useDarkModeContext();

    return (
        <div style={{background: isDarkMode ? "black" : "white"}} className={app}>
            <div className={container}>
                <ModeSwitch />
                <Header />
                <Hero />
                <Skills />
                <Profile />
                <Projects />
                <Footer />
            </div>
        </div>
    )
}

export default App
