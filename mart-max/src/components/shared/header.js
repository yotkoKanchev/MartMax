import React, { useContext } from 'react'
import { AuthContext } from "./../auth/Auth.js";
import { NavLink } from "react-router-dom";

import { appAuth } from "./../../firebase";
const Header = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <header className="site-navbar py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-3">
                        <h1 className="mb-0"><a className="text-white h2 mb-0" href="/">{document.title.toUpperCase()}</a></h1>
                    </div>
                    <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                        <nav className="site-navigation position-relative text-right text-lg-center">
                            <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                <li className="active">
                                    <NavLink exact to="/">Начало</NavLink>
                                </li>
                                <li className="has-children">
                                    <a className="active-link">Услуги</a>
                                    <ul className="dropdown">
                                        <li><NavLink exact to="/heating" className="active-link">Отопление</NavLink></li>
                                        <li><NavLink exact to="/ac" className="active-link">Климатизация</NavLink></li>
                                        <li><NavLink exact to="/ventilation" className="active-link">Вентилация</NavLink></li>
                                        <li><NavLink exact to="/design" className="active-link">Проектиране</NavLink></li>
                                        {/* <li><a href='/heating'>Отопление</a></li>
                                        <li><a href='/ac'>Климатизация</a></li>
                                        <li><a href='/ventilation'>Вентилация</a></li>
                                        <li><a href='/design'>Проектиране</a></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <NavLink exact to="/about" className='active'>За Нас</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact" className="active-link">Контакти</NavLink>
                                </li>
                                {
                                    currentUser ?
                                        <li><a href="" className="active-link" onClick={() => appAuth.signOut()}>Администрация</a></li>
                                        : null
                                }
                                {
                                    currentUser ?
                                        <li><a href="" className="active-link" onClick={() => appAuth.signOut()}>Отписване</a></li>
                                        : null
                                }
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header