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
        <section className="about-me-container" id="about-me">
            <h1 className="about-me-title">Me concernant</h1>
            <div>
                <div className="introduction">
                    <h2>Qui suis-je ?</h2>
                    <p>
                        Nulla irure ea consectetur quis excepteur labore sunt aliqua voluptate quis eiusmod ullamco dolor. Occaecat dolore deserunt Lorem aliqua officia ut nulla labore consectetur id. Voluptate ea aute voluptate irure velit reprehenderit cupidatat incididunt occaecat quis. Incididunt velit sunt sint fugiat cillum.

                        Cillum nulla est consectetur esse dolore. Elit ex quis consectetur ipsum. Quis ex eu amet sunt irure reprehenderit. Sit voluptate magna qui deserunt aliqua. Nostrud sunt labore Lorem sint duis in. Sunt anim velit duis culpa qui ipsum ut proident excepteur est esse. Ad culpa irure velit eu magna mollit nulla in voluptate veniam elit amet minim.

                        Proident mollit amet enim laboris id esse ullamco eu sit. Dolor elit minim sit quis in irure. Velit aliqua proident amet anim dolore non do laborum amet. Voluptate officia deserunt in occaecat deserunt aliqua veniam veniam aliqua. Minim esse pariatur qui nostrud.
                    </p>
                </div>
                <div className="skills-container">
                    <h2>Langages et technologies que je connais</h2>
                    <div>
                        {skills.map((skill, idx) => <SkillItem skill={skill} id={idx} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme