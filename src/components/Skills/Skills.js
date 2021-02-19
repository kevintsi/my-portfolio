import React from "react"
import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills-container fade">
            <div><h2>Compétences</h2></div>
            <div className="skills-main-container">
                <div className="category-container">
                    <div>Web</div>
                    <div>
                        <div>
                            <div>Image</div>
                            <div>React</div>
                        </div>
                        <div>
                            <div>Image</div>
                            <div>Flask</div>
                        </div>
                    </div>
                </div>
                <div className="category-container">
                    <div>Mobile</div>
                    <div>
                        <div>
                            <div>Image</div>
                            <div>Android</div>
                        </div>
                    </div>
                </div>
                <div className="category-container">
                    <div>Logiciel</div>
                    <div>
                        <div>
                            <div>Image</div>
                            <div>C#</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills