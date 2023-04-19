import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Home.css"


const Home = () => {

    return (
        <section className="home-container" id="home">
            {/* <div className="home-left"> */}
            <div className="brief-introduction-container">
                <div className="heading" >
                    <div className="primary-heading">Bonjour, je m'appelle <strong style={{ color: "#D91E18" }}>Kévin TSI</strong></div>
                    <p className="secondary-heading">Développeur Web FullStack orienté Frontend</p>
                </div>
                <div className="social-network-container">
                    <div><a href="https://www.linkedin.com/in/k%C3%A9vin-tsi-160381181/"><img src={process.env.PUBLIC_URL + "/images/linkedIn.png"} alt="LinkedIn" /></a></div>
                    <div><a href="https://github.com/kevintsi"><img src={process.env.PUBLIC_URL + "/images/github.png"} alt="Github" /></a></div>
                </div>
                <div>
                    <NavHashLink smooth className="contact-button-link" to="/#contact"><div className="contact-button-container"><input className="contact-button" type="button" value="Contact" /></div></NavHashLink>
                </div>
            </div>
            {/* </div> */}
            {/* <div className="home-right"> */}
            {/* </div> */}
        </section>
    )
}

export default Home;