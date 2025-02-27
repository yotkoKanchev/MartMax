import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { fetchData } from "./../firebase";

const Home = () => {

    var [menus, setMenus] = useState({})

    useEffect(() => {
        fetchData('menus', setMenus, null);
    }, [])

    return (

        <div className="container-fluid">
            <div className="row items-center" >
                {
                    Object.keys(menus).map((key) => {
                        let menu = menus[key];
                        return (
                            <div key={key} className="col-lg-5">
                                <NavLink to={key} className="active-link">
                                    <div className="image-wrap-2">
                                        <div className="image-info">
                                            <h2 className="mb-3">{menu.title}</h2>
                                        </div>
                                        <div className="square-container">
                                            <img src={menu.img} alt={menu.title} className="img-fluid img-sized" />
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}


export default Home