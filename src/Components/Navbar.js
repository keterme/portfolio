import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (navRef.current.classList.contains("responsive_nav")) {
            navRef.current.classList.remove("responsive_nav");
        }
    };

    return (
        <header>
            <Avatar
                alt="Elvis"
                src="../../assets/elvis.jpg"
                sx={{ width: 56, height: 56 }}
            />
            <nav ref={navRef}>
                <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
                <a href="#about" onClick={() => scrollToSection("about")}>About Me</a>
				<a href="#experience" onClick={() => scrollToSection("experience")}>Experience</a>
                <a href="#projects" onClick={() => scrollToSection("projects")}>My Work</a>
                <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={() => navRef.current.classList.toggle("responsive_nav")}
                >
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={() => navRef.current.classList.toggle("responsive_nav")}
            >
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
