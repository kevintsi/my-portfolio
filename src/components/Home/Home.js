import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-left-div">
                <div className="introduction-container">
                    <div>Bonjour,</div>
                    <div>je m'appelle <strong style={{ color: "#D91E18" }}>Kévin</strong></div>
                    <div>Développeur</div>
                    <div className="contact-button-container"><input className="contact-button" type="button" value="Contact" /></div>
                    <div className="social-network-container">
                        <div>Icone LinkedIn</div>
                        <div>Icone Github</div>
                    </div>
                </div>
            </div>
            <div className="home-right-div"><div>Photo</div></div>
        </div>
    )
}

export default Home;