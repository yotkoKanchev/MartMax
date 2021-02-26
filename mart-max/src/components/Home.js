import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { fireDb } from './../firebase';

const Home = () => {

    var [menus, setMenusInfo] = useState({})

    useEffect(() => {
        fireDb.child('menus').on('value', snapshot => {
            setMenusInfo({
                ...snapshot.val()
            })
        })
    }, [])

    return (

        <div className="container-fluid">
            <div className="row items-center">
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
                                        <img src={menu.img} alt={menu.title} className="img-fluid img-sized" />
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Home