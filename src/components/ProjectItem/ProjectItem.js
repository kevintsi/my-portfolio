import { React } from "react"
import "./ProjectItem.css"
const ProjectItem = ({ project }) => {
    return (
        <div className="card-project">
            <h4>{project.name}</h4>
            <div>
                <p>{project.description}</p>
                <a href={project.github_link}>
                    <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="Cliquez dessus pour accéder au github" />
                </a>
            </div>
        </div>
    )
}

export default ProjectItem