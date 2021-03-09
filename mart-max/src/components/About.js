import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fetchData } from "./../firebase";

const About = () => {
    var [employees, setEmployees] = useState({})

    useEffect(() => {
        fetchData('employees', setEmployees, null);
    }, [])

    return (
        <div>
            < Page collection="about" />
            <div className="row pt-3 pb-5">
                {
                    Object.keys(employees).map((key) => {
                        let employee = employees[key];
                        // in case there are no services
                        let services = employee.services ? employee.services.split(", ") : [];

                        return (
                            <div key={key} className="col-md-6 col-lg-6 col-xl-6 text-center rounded-container pt-5">
                                <img src={employee.img} alt={employee.name} className="img-fluid img-sq rounded-circle mb-4"></img>
                                <h2 className="font-weight-light mb-4">{employee.name}</h2>
                                <h5>{employee.title}</h5>
                                <h5 className="font-weight-light mb-4"><span className="mr-1">тел.</span>
                                    <a href={employee.phone}>{employee.phone}</a>
                                </h5>

                                <ul className="text-center">
                                    {
                                        Object.keys(services).map((id) => {
                                            let service = services[id]
                                            return (
                                                <li key={id}>{service}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About