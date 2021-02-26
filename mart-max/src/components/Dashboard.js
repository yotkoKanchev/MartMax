import React, { useContext } from 'react'
import { AuthContext } from "./auth/Auth.js";
import { Redirect } from "react-router";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <h1>DASHBOARD</h1>
    )
}

export default Dashboard;