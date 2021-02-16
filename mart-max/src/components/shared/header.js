import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () =>
(
    <header>
        <nav>
            <ul className='navigation'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/body" activeClassName="active-link">Body</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header >
)

export default Header