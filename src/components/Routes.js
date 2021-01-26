import React from "react";
import { Route, Switch } from "react-router-dom";
import Aboutme from "./Aboutme/Aboutme";
import Home from "./Home/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about-me" component={Aboutme} />
        </Switch>
    )
}

export default Routes;