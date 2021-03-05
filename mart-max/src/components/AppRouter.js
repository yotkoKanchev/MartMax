import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AirConditioning from "./AirConditioning";
import Heating from "./Heating";
import Design from "./Design";
import Ventilation from "./Ventilation";
import Login from "./auth/LoginForm";
import Dashboard from "./admin/Dashboard";
import Edit_About from "./admin/Edit_About";
import Edit_Contact from "./admin/Edit_Contact";
import Edit_AirConditioning from "./admin/Edit_AirConditioning";
import Edit_Ventilation from "./admin/Edit_Ventilation";
import Edit_Design from "./admin/Edit_Design";
import Edit_Heating from "./admin/Edit_Design";
import Edit_Employees from "./admin/Edit_Employees";

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
                        <PrivateRoute exact path='/admin/dashboard' component={Dashboard} />
                        <PrivateRoute exact path='/admin/edit-ac' component={Edit_AirConditioning} />
                        <PrivateRoute exact path='/admin/edit-design' component={Edit_Design} />
                        <PrivateRoute exact path='/admin/edit-heating' component={Edit_Heating} />
                        <PrivateRoute exact path='/admin/edit-ventilation' component={Edit_Ventilation} />
                        <PrivateRoute exact path='/admin/edit-about' component={Edit_About} />
                        <PrivateRoute exact path='/admin/edit-contact' component={Edit_Contact} />
                        <PrivateRoute exact path='/admin/edit-employees' component={Edit_Employees} />
                        <Route ><Home /></Route>
                    </Switch>
                </div>
            </div >
        </AuthProvider>
    )
}

export default AppRouter
