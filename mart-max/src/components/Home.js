import React from 'react'
import heating from './../images/heating.jpg'
import air_conditioning from './../images/ac.jpg'
import design from './../images/design.jpg'
import ventilation from './../images/ventilation.png'
import { NavLink } from "react-router-dom";

// TODO Images urls comes from Firebase !


const Home = () =>
(

    <div className="container-fluid">
        <div className="row items-center">

            <div className="col-lg-5">
                <NavLink to="/heating" activeClassName="active-link">
                    <div className="image-wrap-2">
                        <div className="image-info">
                            <h2 className="mb-3">Отопление</h2>
                        </div>
                        <img src={heating} alt="Image" className="img-fluid" />
                    </div>
                </NavLink>
            </div>

            <div className="col-lg-5">
                <NavLink to="/ac" activeClassName="active-link">
                    <div className="image-wrap-2">
                        <div className="image-info">
                            <h2 className="mb-3">Климатизация</h2>
                        </div>
                        <img src={air_conditioning} alt="Image" className="img-fluid" />
                    </div>
                </NavLink>

            </div>

            <div className="col-lg-5">
                <NavLink to="/ventilation" activeClassName="active-link">
                    <div className="image-wrap-2">
                        <div className="image-info">
                            <h2 className="mb-3">Вентилация</h2>
                        </div>
                        <img src={ventilation} alt="Image" className="img-fluid" />
                    </div>
                </NavLink>

            </div>

            <div className="col-lg-5">
                <NavLink to="/design" activeClassName="active-link"><div className="image-wrap-2">
                    <div className="image-info">
                        <h2 className="mb-3">Проектиране</h2>
                    </div>
                    <img src={design} alt="Image" className="img-fluid" />
                </div>
                </NavLink>
            </div>

        </div>
    </div>
)


export default Home