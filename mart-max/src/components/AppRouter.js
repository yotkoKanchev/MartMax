import React from "react";
import { Route, Switch } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Login from "./auth/Login";

const AppRouter = () => (
    // <Router>
    //     <Switch>
    //         <Route path="/about"><About /></Route>
    //         <Route path="/body"><Body /></Route>
    //         <Route path="/contact"><Contact /></Route>
    //         {/* <Route path="/"><Home /></Route> */}
    //     </Switch>
    // </Router>

    <div className="site-main">
        <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/body"><Body /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><Login /></Route>
            <Route ><Home /></Route>
        </Switch>
    </div>
)

export default AppRouter

// function Home() {
//     return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
// }

// function Users() {
//     return <h2>Users</h2>;
// }

// function Contact() {
//     return <h2>Contact</h2>;
// }