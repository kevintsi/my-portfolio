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

    const software_skills = [
        { name: "C#", imgSrc: "images/csharp.png" },
        { name: "Python", imgSrc: "images/python.png" }
    ]
    return (
        <div className="skills-container fade">
            <div><h2>Compétences</h2></div>
            <div className="skills-main-container">
                <div className="category-container">
                    <div>Web</div>
                    <div className="list-skills">
                        {web_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div>Mobile</div>
                    <div className="list-skills">
                        {mobile_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="category-container">
                    <div>Logiciel</div>
                    <div className="list-skills">
                        {software_skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills