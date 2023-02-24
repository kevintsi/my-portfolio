import { React } from "react"
import ProjectItem from "../ProjectItem/ProjectItem"
import "./Projects.css"

const Projects = () => {
    const projects_list = [
        // {
        //     name: "Mini-Projet Cloud Computing",
        //     github_link: "https://github.com/kevintsi/projetCC",

        // }
    ]
    return (
        <section className="projects-container" id="projects">
            <h1>Mes projets professionnels</h1>
            <div className="project-list">
                {projects_list.map(project => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects