import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Login from "./auth/LoginForm";
import AirConditioning from "./AirContitioning";
import Heating from "./Heating";
import Design from "./Design";
import Ventilation from "./Ventilation";

const AppRouter = () => (
    <div className="site-main">
        <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/ac"><AirConditioning /></Route>
            <Route path="/heating"><Heating /></Route>
            <Route path="/design"><Design /></Route>
            <Route path="/ventilation"><Ventilation /></Route>
            <Route ><Home /></Route>
        </Switch>
    </div>
)

export default AppRouter
