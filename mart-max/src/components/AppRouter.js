import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AirConditioning from "./AirConditioning";
import Heating from "./Heating";
import Design from "./Design";
import Ventilation from "./Ventilation";
import Login from "./auth/LoginForm";
import Dashboard from "./Dashboard";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
    return (
        <AuthProvider>
            <div className="site-main">
                <div className="App">
                    <Switch>
                        <Route exact path="/about"><About /></Route>
                        <Route exact path="/contact"><Contact /></Route>
                        <Route exact path="/ac"><AirConditioning /></Route>
                        <Route exact path="/heating"><Heating /></Route>
                        <Route exact path="/design"><Design /></Route>
                        <Route exact path="/ventilation"><Ventilation /></Route>
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/dashboard"><Dashboard /></Route>
                        <Route ><Home /></Route>
                        {/* <PrivateRoute exact path='dashboard'><Dashboard /></PrivateRoute> */}
                    </Switch>
                </div>
            </div >
        </AuthProvider>
    )
}

export default AppRouter
