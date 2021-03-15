import React, { useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Context } from "../../App"
import "./Home.css"


const Home = () => {
    const { language } = useContext(Context);

    let translation = {
        "FR": {
            "intro_first_part": "Bonjour",
            "intro_second_part": "Je m'appelle ",
            "intro_last_part": "Développeur"
        },
        "EN": {
            "intro_first_part": "Hi",
            "intro_second_part": "My name is ",
            "intro_last_part": "Developer"
        }
    }

    return (
        <div className="home-container" id="home">
            {/* <div className="home-left"> */}
            <div className="brief-introduction-container">
                <div>
                    <div>{translation[language].intro_first_part}</div>
                    <div>{translation[language].intro_second_part}<strong style={{ color: "#D91E18" }}>Kévin</strong></div>
                    <div>{translation[language].intro_last_part}</div>
                </div>
                <div>
                    <NavHashLink smooth className="contact-button-link" to="/#contact"><div className="contact-button-container"><input className="contact-button" type="button" value="Contact" /></div></NavHashLink>
                </div>
            </div>
            <div className="social-network-container">
                <div><img src="/images/linkedIn.png" alt="LinkedIn" /></div>
                <div><img src="/images/github.png" alt="Github" /></div>
            </div>
            {/* </div> */}
            {/* <div className="home-right"> */}
            <div className="photo-container"><img className="photo-cv" src="images/Photo_cv.jpg" alt="Photo CV" /></div>
            {/* </div> */}
        </div>
    )
}

export default Home;