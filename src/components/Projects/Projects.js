import { React } from "react"
import ProjectItem from "../ProjectItem/ProjectItem"
import "./Projects.css"

const Projects = () => {
    const projects_list = [
        {
            name: "Mini-Projet Cloud Computing",
            description: "Mini-Projet consistant à créer un modèle en utilisant un algorithme de machine learning (Régression Linéaire, Classification)  et puis l'utiliser dans une API.",
            github_link: "https://github.com/kevintsi/projetCC",

        },
    ]
    return (
        <section className="projects-container" id="projects">
            <div>
                <h1 className="projects-title">Mes projets professionnels</h1>
                <p>Dans cette section vous trouverez différents projets professionels que j'ai pu faire.</p>
                <div className="project-list">
                    {projects_list.map(project => (
                        <ProjectItem project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects