import React from "react"
import SkillItem from "../SkillItem/SkillItem"
import "./Skills.css"

const Skills = () => {

    const web_skills = [
        { name: "React", imgSrc: "images/react.png" }
    ]

    const mobile_skills = [
        { name: "Android", imgSrc: "images/android.png" }
    ]

    const others_skills = [
        { name: "C#", imgSrc: "images/csharp.png" },
        { name: "Python", imgSrc: "images/python.png" }
    ]

    const containerization_skills = [
        { name: "Docker", imgSrc: "images/docker.png" }
    ]

    const sgbd_skills = [
        {
            name: "PostgreSQL", imgSrc: "images/postgresql.png"
        }, {

            name: "SQL server", imgSrc: "images/sqlserver.png"
        }
    ]

    return (
        <div className="skills-container" id="skills">
            <h1>Compétences</h1>
            <div className="skills-main-container">
                <div className="category-container">
                    <div className="category-name">Web</div>
                    <div className="list-skills">
                        {web_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-name">Mobile</div>
                    <div className="list-skills">
                        {mobile_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-name">Autres langages</div>
                    <div className="list-skills">
                        {others_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-name">Conteneurisation</div>
                    <div className="list-skills">
                        {containerization_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-name">SGBD</div>
                    <div className="list-skills">
                        {sgbd_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills