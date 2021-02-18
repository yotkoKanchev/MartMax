import React from 'react'
import heating from './../images/Index/heating_sm.jpg'
import air_conditioning from './../images/Index/air-conditioning_sm.jpg'
import projectWork from './../images/Index/projectWork_sm.jpg'
import ventilation from './../images/Index/ventilation_sm.png'
import { NavLink } from "react-router-dom";


const Home = () =>
(
    <div className="App">
        <div className="container-fluid" data-aos="fade" data-aos-delay="500">
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
                    <NavLink to="/air-conditioning" activeClassName="active-link">
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
                    <NavLink to="/project-work" activeClassName="active-link"><div className="image-wrap-2">
                        <div className="image-info">
                            <h2 className="mb-3">Проектиране</h2>
                        </div>
                        <img src={projectWork} alt="Image" className="img-fluid" />
                    </div>
                    </NavLink>
                </div>

            </div>
        </div>
    </div>
)


export default Home