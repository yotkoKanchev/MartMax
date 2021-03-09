import React from 'react'
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row items-center">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редакция на съдържание</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 pt-5">
                        <table className="table table-borderless table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>№</th>
                                    <th>Страница</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-light pl-3">1</td>
                                    <td className="bg-light pl-3">Климатизация</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/ac">Разгледай</a>
                                        <NavLink exact to="edit-ac" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">2</td>
                                    <td className="bg-light pl-3">Отопление</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/heating">Разгледай</a>
                                        <NavLink exact to="edit-heating" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">3</td>
                                    <td className="bg-light pl-3">Проектиране</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/project">Разгледай</a>
                                        <NavLink exact to="edit-design" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">4</td>
                                    <td className="bg-light pl-3">Вентилация</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/ventilation">Разгледай</a>
                                        <NavLink exact to="edit-ventilation" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">5</td>
                                    <td className="bg-light pl-3">За нас</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/about">Разгледай</a>
                                        <NavLink exact to="edit-about" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">6</td>
                                    <td className="bg-light pl-3">Контакти</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/contact">Разгледай</a>
                                        <NavLink exact to="edit-contact" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light pl-3">7</td>
                                    <td className="bg-light pl-3">Служители</td>
                                    <td className="bg-light">
                                        <a className="btn text-primary" target="_blank" href="/about">Разгледай</a>
                                        <NavLink exact to="edit-employees" className="btn text-danger">Промени</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;