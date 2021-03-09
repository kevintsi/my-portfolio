import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Aboutme from "../Aboutme/Aboutme";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./Routes.css"

const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about-me", name: "About_me", Component: Aboutme },
    { path: "/skills", name: "Skills", Component: Skills },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/projects", name: "Projects", Component: Projects }
]
const Routes = () => {

    return (
        <div className="main-container">
            {routes.map(({ path, name, Component }) => (
                <Route key={name} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            classNames="fade"
                            timeout={300}
                            unmountOnExit
                        >
                            <Component />
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    )
}

export default Routes;