import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Aboutme.css"

const Aboutme = () => {

    const skills = [
        "React.js",
        "Python",
        "Docker",
        "Git",
        "Node.js",
        "SQL",
        "Linux",
        "Windows",
        "Express.js"
    ]


    return (
        <section id="about-me">
            <div className="about-me-container">
                <h1 className="about-me-title">Me concernant</h1>
                <p className="about-me-summary">Ici vous trouverez plus d'informations me concernant, qu'est-ce que je fais, langages de programmations et technologies que je connais.</p>
                <div>
                    <div className="introduction">
                        <h2>Qui suis-je ?</h2>
                        <p>
                            Bonjour, je suis un <b>Développeur FullStack orienté Backend</b>. Vous pouvez voir quelques uns de mes projets dans la section <b>Projets</b>.
                        </p>
                        <p>
                            Je suis ouvert aux nouvelles opportunités où je pourrais <b>contribuer</b>, <b>apprendre</b> et <b>grandir</b> en tant que développeur. Si vous avez des opportunités qui correspondent avec mes compétences
                            et expérience, n'hésitez pas à me contacter.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h2>Langages et technologies que je connais</h2>
                        <div>
                            {skills.map((skill, idx) => <SkillItem skill={skill} id={idx} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme