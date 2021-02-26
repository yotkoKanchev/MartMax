import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AirConditioning from "./AirContitioning";
import Heating from "./Heating";
import Design from "./Design";
import Ventilation from "./Ventilation";
import Login from "./auth/LoginForm";

const AppRouter = () => {
    let url = window.location.href;
    if (url.includes('heating')) {
        document.body.style.backgroundColor = "green"
    }

    return (
        <div className="site-main">
            <div className="App">
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/ac"><AirConditioning /></Route>
                    <Route path="/heating"><Heating /></Route>
                    <Route path="/design"><Design /></Route>
                    <Route path="/ventilation"><Ventilation /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route ><Home /></Route>
                </Switch>
            </div>
        </div >
    )
}

export default AppRouter
