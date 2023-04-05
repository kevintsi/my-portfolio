import { React } from "react"
import ProjectItem from "../ProjectItem/ProjectItem"
import "./Projects.css"

const Projects = () => {
    const projects_list = [
        {
            name: "Mini-Projet Cloud Computing",
            description: "Mini-Projet consistant à créer un modèle en utilisant un algorithme de machine learning (Régression Linéaire, Classification)  et puis l'utiliser dans une API.",
            github_link: "https://github.com/kevintsi/projetCC",
            skills: [
                "Python",
                "Git",
                "FastAPI"
            ]

        }, {
            name: "Projet Todolist",
            description: "Application todolist permettant d'ajouter, modifier et supprimer une ou plusieurs taches",
            github_link: "https://github.com/kevintsi/TodoList",
            skills: [
                "React.js",
                "Git"
            ]

        }
        , {
            name: "Projet MyMovieApp",
            description: "Application mobile répertoriant les films populaires, récents et mieux notés à l'aide de l'API de TheMovieDB",
            github_link: "https://github.com/kevintsi/MyMovieApp",
            skills: [
                "React-Native",
                "Git",
            ]

        },
    ]
    return (
        <section className="projects-container" id="projects">
            <div>
                <h1 className="section-title">Mes projets professionnels</h1>
                <p>Dans cette section vous trouverez différents projets professionels que j'ai pu faire.</p>
                <div className="project-list">
                    {projects_list.map((project, idx) => (
                        <ProjectItem key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects