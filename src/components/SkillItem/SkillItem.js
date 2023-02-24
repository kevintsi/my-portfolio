import React from "react";
import "./SkillItem.css"

const SkillItem = ({ skill, idx }) => {
    return (
        <div id={idx} className="skill-item">{skill}</div>
    )
}

export default SkillItem