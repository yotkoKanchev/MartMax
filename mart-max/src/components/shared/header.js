import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-navbar py-3" role="banner">

            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-2" data-aos="fade-down">
                        <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">MAXMART</a></h1>
                    </div>
                    <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">

                        <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
                            <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                <li className="active">
                                    <NavLink to="/">Начало</NavLink>
                                </li>
                                <li>
                                    <a href="/contact">tEST</a>

                                </li>
                                <li className="has-children">
                                    <a href="single.html">Услуги</a>
                                    <ul className="dropdown">
                                        <li><NavLink to="/heating" activeClassName="active-link">Отопление</NavLink></li>
                                        <li><NavLink to="/air-conditioning" activeClassName="active-link">Климатизация</NavLink></li>
                                        <li><NavLink to="/ventilation" activeClassName="active-link">Вентилация</NavLink></li>
                                        <li><NavLink to="/project-work" activeClassName="active-link">Проектиране</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/body" activeClassName="active-link">За Нас</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" activeClassName="active-link">Контакти</NavLink>
                                </li>
                            </ul>

                        </nav>

                    </div>
                    <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" styles="position: relative; top: 3px;"><a href="#"
                        className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a>
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header