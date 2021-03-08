import React, { useContext, useState } from 'react'
import { AuthContext } from "./../auth/Auth.js";
import { NavLink } from "react-router-dom";

import { signOut } from "./../../firebase";

const Header = () => {

    const { currentUser } = useContext(AuthContext);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <header className="site-navbar py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                        <nav className="navbar navbar-expand-lg site-navigation position-relative text-right text-lg-center">

                            <h1 className="mb-0"><a className="text-white h2 mb-0 logo" href="/">{document.title.toUpperCase()}</a></h1>

                            <button className="custom-toggler navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <ul className={`${isNavCollapsed ? 'collapse site-menu js-clone-nav mx-auto d-none d-lg-block' : ''} navbar-collapse site-menu js-clone-nav mx-auto d-none d-lg-block items-center`} id="navbarsExample09">
                                <li className="active">
                                    {/* <NavLink exact to="/">Начало</NavLink> */}
                                    <a href='/'>Начало</a>
                                </li>
                                <li id="anchor" className="has-children">
                                    <a className="active-link">Услуги <i id="icon" className="fas fa-chevron-down"></i></a>
                                    <ul className="dropdown">
                                        {/* <li><NavLink exact to="/heating" className="active-link">Отопление</NavLink></li>
                                        <li><NavLink exact to="/ac" className="active-link">Климатизация</NavLink></li>
                                        <li><NavLink exact to="/ventilation" className="active-link">Вентилация</NavLink></li>
                                        <li><NavLink exact to="/design" className="active-link">Проектиране</NavLink></li> */}
                                        <li><a href='/heating'>Отопление</a></li>
                                        <li><a href='/ac'>Климатизация</a></li>
                                        <li><a href='/ventilation'>Вентилация</a></li>
                                        <li><a href='/design'>Проектиране</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/* <NavLink exact to="/about" className='active'>За Нас</NavLink> */}
                                    <a className="active-link" href='/about'>За Нас</a>

                                </li>
                                <li>
                                    {/* <NavLink exact to="/contact" className="active-link">Контакти</NavLink> */}
                                    <a className="active-link" href='/contact'>Контакти</a>

                                </li>
                                {
                                    currentUser ?
                                        <li><NavLink exact to="/admin/dashboard" className="active-link">Администрация</NavLink></li>
                                        : null
                                }
                                {
                                    currentUser ?
                                        <li><a href="" className="active-link" onClick={() => signOut()}>Отписване</a></li>
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