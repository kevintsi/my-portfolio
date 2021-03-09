import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../App"
import "./NavBar.css";

const NavBar = () => {

    const { language, onLanguageChange } = useContext(Context);
    let translation = {
        "FR": {
            "home": "Accueil",
            "about_me": "A propos de moi",
            "skills": "Compétences"
        },
        "EN": {
            "home": "Home",
            "about_me": "About me",
            "skills": "Skills"
        }
    }
    return (
        <nav className="nav-container">
            <div className="nav-left">
                <NavLink to="/" className="portfolio" exact><span className="port">Port</span><span className="folio">folio</span></NavLink>
            </div>
            <div className="nav-right">
                <ul>
                    <NavLink activeClassName="activeLink" to="/" exact><li>{translation[language].home}</li></NavLink>
                    <NavLink activeClassName="activeLink" to="/about-me"><li> {translation[language].about_me}</li></NavLink>
                    <NavLink activeClassName="activeLink" to="/skills"><li>{translation[language].skills}</li></NavLink>
                    <NavLink activeClassName="activeLink" to="/contact"><li>Contact</li></NavLink>
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