import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"
import "./NavBar.css";
import useScroll from "./useHideOnScroll";
const NavBar = () => {

    const { scrollDirection } = useScroll();
    const [isMenuShown, setIsMenuShown] = useState(false)

    const showMobileMenu = () => {
        setIsMenuShown(!isMenuShown)
    }

    return (
        <>
            <div className={isMenuShown ? "menu-mobile menu-mobile-show" : "menu-mobile menu-mobile-hidden"}>
                <ul>
                    <li><NavHashLink onClick={() => showMobileMenu()} smooth activeClassName="activeLink" to="/#home" exact>Accueil</NavHashLink></li>
                    <li><NavHashLink onClick={() => showMobileMenu()} smooth activeClassName="activeLink" to="/#about-me">A propos de moi</NavHashLink></li>
                    <li><NavHashLink onClick={() => showMobileMenu()} smooth activeClassName="activeLink" to="/#projects">Projets</NavHashLink></li>
                    <li><NavHashLink onClick={() => showMobileMenu()} smooth activeClassName="activeLink" to="/#contact">Contact</NavHashLink></li>
                </ul>
            </div>
            <nav className="nav-mobile">
                <img src={process.env.PUBLIC_URL + "/images/hamburger_menu.png"} alt="menu" onClick={() => showMobileMenu()} />
                <NavLink to="/" className="portfolio" exact><span className="port">Port</span><span className="folio">folio</span></NavLink>
            </nav>
            <nav className={scrollDirection === "down" ? "nav-container" : "nav-hidden"} >
                <div className="nav-left">
                    <NavLink to="/" className="portfolio" exact><span className="port">Port</span><span className="folio">folio</span></NavLink>
                </div>
                <ul className="nav-right">
                    <li><NavHashLink smooth activeClassName="activeLink" to="/#home" exact>Accueil</NavHashLink></li>
                    <li><NavHashLink smooth activeClassName="activeLink" to="/#about-me" exact>A propos de moi</NavHashLink></li>
                    <li><NavHashLink smooth activeClassName="activeLink" to="/#projects" exact>Projets</NavHashLink></li>
                    <li><NavHashLink smooth activeClassName="activeLink" to="/#contact" exact>Contact</NavHashLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar