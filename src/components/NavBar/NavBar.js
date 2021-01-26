import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return (
        <nav className="nav-container">
            <div className="nav-left">
                <span className="port">Port</span><span className="folio">folio</span>
            </div>
            <div className="nav-right">
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="/about-me"><li>A propos de moi</li></Link>
                    <Link to="/skills"><li>Compétences</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar