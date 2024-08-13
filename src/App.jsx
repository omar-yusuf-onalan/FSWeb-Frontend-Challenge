import './App.css'
import ModeSwitch from "./components/modeswitch/ModeSwitch.jsx";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/skills/Skills.jsx";
import Profile from "./components/profile/Profile.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <ModeSwitch />
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
