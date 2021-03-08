import React from "react";
import "./SkillItem.css"

const SkillItem = ({ skill: { name, imgSrc } }) => {
    return (
        <div className="skill-container">
            <div><img alt={name} src={imgSrc} /></div>
            <div className="skill-name">{name}</div>
        </div>
    )
}

export default SkillItem