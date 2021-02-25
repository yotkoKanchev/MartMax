import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-navbar py-3" role="banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-2" data-aos="fade-down">
                        <h1 className="mb-0"><NavLink className="text-white h2 mb-0" to="/">{document.title.toUpperCase()}</NavLink></h1>
                    </div>
                    <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                        <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
                            <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                <li className="active">
                                    <NavLink to="/">Начало</NavLink>
                                </li>
                                <li className="has-children">
                                    <a className="active-link">Услуги</a>
                                    <ul className="dropdown">
                                        <li><NavLink to="/heating" className="active-link">Отопление</NavLink></li>
                                        <li><NavLink to="/ac" className="active-link">Климатизация</NavLink></li>
                                        <li><NavLink to="/ventilation" className="active-link">Вентилация</NavLink></li>
                                        <li><NavLink to="/design" className="active-link">Проектиране</NavLink></li>
                                        {/* <li><a href='/heating'>Отопление</a></li>
                                        <li><a href='/ac'>Климатизация</a></li>
                                        <li><a href='/ventilation'>Вентилация</a></li>
                                        <li><a href='/design'>Проектиране</a></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/about" className="active-link">За Нас</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="active-link">Контакти</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header