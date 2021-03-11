import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"
import { Context } from "../../App"
import "./NavBar.css";
import useHideOnScrolled from "./useHideOnScroll";
const NavBar = () => {

    let lastScrollTop = 0;
    // const [hidden, setHidden] = useState(false);
    const hidden = useHideOnScrolled()
    const { language, onLanguageChange } = useContext(Context);
    let translation = {
        "FR": {
            "home": "Accueil",
            "about_me": "A propos de moi",
            "skills": "Compétences",
            "projects": "Projets",
            "contact": "Contact"
        },
        "EN": {
            "home": "Home",
            "about_me": "About me",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact"
        }
    }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     console.log("Before update last top : " + lastScrollTop)
    //     const top = window.pageYOffset || document.documentElement.scrollTop;
    //     if (!hidden && top > lastScrollTop) {
    //         setHidden(true)
    //     } else if (hidden) {
    //         setHidden(false)
    //     }
    //     console.log("Hidden : " + hidden)
    //     lastScrollTop = top;
    //     console.log("Last top : " + lastScrollTop)
    // };

    return (
        <nav className={!hidden ? "nav-container" : "nav-hidden"} >
            <div className="nav-left">
                <NavLink to="/" className="portfolio" exact><span className="port">Port</span><span className="folio">folio</span></NavLink>
            </div>
            <div className="nav-right">
                <ul>
                    <NavHashLink smooth activeClassName="activeLink" to="/#home" exact><li>{translation[language].home}</li></NavHashLink>
                    <NavHashLink smooth activeClassName="activeLink" to="/#about-me"><li> {translation[language].about_me}</li></NavHashLink>
                    <NavHashLink smooth activeClassName="activeLink" to="/projects"><li>{translation[language].projects}</li></NavHashLink>
                    <NavHashLink smooth activeClassName="activeLink" to="/skills"><li>{translation[language].skills}</li></NavHashLink>
                    <NavHashLink smooth activeClassName="activeLink" to="/contact"><li>{translation[language].contact}</li></NavHashLink>
                    <select value={language} onChange={(e) => onLanguageChange(e)}>
                        <option value="FR">FR</option>
                        <option value="EN">EN</option>
                    </select>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar