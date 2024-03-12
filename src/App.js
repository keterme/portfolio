import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <React.Fragment>
            <div id="home">
				<Navbar />
			</div>
            <div>
                <Home />
            </div>
            <div id="about" className="aboutsection">
                <div data-aos="flip-down" className="animes">
                    <About />
                </div>
            </div>
            <div id="experience" className="experiencesection">
                <div data-aos="fade-left" className="animes_two">
                    <Experience />
                </div>
            </div>
            <div id="services" className="servicesection">
                <div data-aos="fade-down" className="animes_two">
                    <Services />
                </div>
            </div>
            <div id="projects" className="projectsection">
                <div data-aos="fade-right" className="animes_two">
                    <Projects />
                </div>
            </div>
            <ToastContainer/>
            <div id="contact" className="contactsection">
                <div data-aos="fade-up" className="animes_two">
                    <Contact />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
