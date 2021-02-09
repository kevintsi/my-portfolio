import React, { useContext } from "react";
import "./Aboutme.css"
import { Context } from "../../App"

const Aboutme = () => {

    const { language } = useContext(Context);

    let translation = {
        "FR": {
            "introduction": "Je me présente, Kévin TSI , 22 ans et actuellement en 1ère année pour l'obtention d'un titre RNCP (Répertoire National des Certifications Professionnelles) pour devenir Expert Informatique \
            (Bac +5) dans l'école d'informatique H3 Hitema.",
        },
        "EN": {
            "introduction": "Hi, my name is Kévin TSI, I'm 22 years old and currently in my first year to get RNCP title which is an equivalent to Master degree\
            in an the IT school H3 Hitema.",
        }
    }

    return (
        <div className="about-me-container fade">
            <div className="introduction-container">
                <h2>Présentation</h2>
                <div>
                    <div className="about-me-left">
                        <div>Photo</div>
                    </div>
                    <div className="about-me-right">
                        <div>
                            {translation[language].introduction}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursus-container">
                <h2>Cursus Scolaire</h2>
                <div className="cursus-school">
                    <div className="left">
                        <div>
                            <h2>2020 - Aujourd'hui</h2>
                            <div>
                                <h3>H3 Hitema</h3>
                                <h4>Issy-les-Moulineaux</h4>
                                <div>
                                    Titre RNCP équivalent à Master
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h2>2019 - 2020</h2>
                            <div>
                                <h3>H3 Hitema</h3>
                                <h4>Issy-les-Moulineaux</h4>
                                <div>
                                    Bachelor RPI (Responsable de Projets Informatique)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div>
                            <h2>2018 - 2019</h2>
                            <div>
                                <h3>Lycée polyvalent Maximilien Sorre</h3>
                                <h4>Cachan</h4>
                                <div>
                                    BTS SIO option SLAM 2 ème année
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h2>2017 - 2018</h2>
                            <div>
                                <h3>IUT d'Orsay</h3>
                                <h4>Orsay</h4>
                                <div>
                                    1 ère année de DUT Informatique - Passerelle DUCES
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div>
                            <h2>2016 - 2017</h2>
                            <div>
                                <h3>Lycée polyvalent Adolphe Chérioux</h3>
                                <h4>Vitry sur Seine</h4>
                                <div>
                                    Baccalauréat STI2D option SIN - Mention Bien
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme