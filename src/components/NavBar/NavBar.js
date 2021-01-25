import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return (
        <nav className="nav-container">
            <div className="nav-left">
                <span>Portfolio</span>
            </div>
            <div className="nav-right">
                <ul>
                    <Link to="#"><li>Accueil</li></Link>
                    <Link to="#"><li>A propos de moi</li></Link>
                    <Link to="#"><li>Compétences</li></Link>
                    <Link to="#"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar