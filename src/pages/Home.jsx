import {ThemeToggle} from "@/Components/ThemeToggle.jsx";
import {StarBackground} from "@/Components/StarBackground.jsx";
import {Navbar} from "@/Components/Navbar.jsx";
import {HeroSection} from "@/Components/HeroSection.jsx";
import {AboutSection} from "@/Components/AboutSection.jsx";
import {SkillsSection} from "@/Components/SkillsSection.jsx";
import {ProjectsSection} from "@/Components/ProjectsSection.jsx";
import {ContactSection} from "@/Components/ContactSection.jsx";
import {Footer} from "@/Components/Footer.jsx";


export const Home = () => {

    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                {/*THEME TOGGLE*/}
                <ThemeToggle/>
                {/*BACKGROUND EFFECT*/}
                <StarBackground/>
                {/*NAVBAR*/}
                <Navbar/>
                {/*MAIN CONTENT*/}
                <main>
                    <HeroSection/>
                    <AboutSection/>
                    <SkillsSection/>
                    <ProjectsSection/>
                    <ContactSection/>
                </main>
                {/*FOOTER*/}
                <Footer/>

            </div>
        </>
    )
}