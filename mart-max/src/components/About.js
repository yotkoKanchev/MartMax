import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fireDb } from './../firebase';

const About = () => {
    var [aboutInfo, setAboutInfo] = useState({})
    var [employees, setEmployees] = useState({})

    useEffect(() => {
        fireDb.child('about').on('value', snapshot => {
            setAboutInfo({
                ...snapshot.val()
            })
        });

        fireDb.child('employees').on('value', snapshot => {
            setEmployees({
                ...snapshot.val()
            })
        });
    }, [])

    return (
        <div>
            < Page title={aboutInfo.title} image={aboutInfo.img} description={aboutInfo.text} />
            <div className="row pt-3 pb-5">
                {
                    Object.keys(employees).map((key) => {
                        let employee = employees[key];
                        return (
                            <div key={key} className="col-md-6 col-lg-6 col-xl-6 text-center pt-5">
                                <img src={employee.img} alt="Image" className="img-fluid w-50 rounded-circle mb-4"></img>
                                <h2 className="font-weight-light mb-4">{employee.name}</h2>
                                <h5>{employee.title}</h5>
                                <h5 className="font-weight-light mb-4">тел.
                                        <a href={employee.phone}>{employee.phone}</a>
                                </h5>
                                <ul className="text-center">
                                    {
                                        Object.keys(employee.services).map((id) => {
                                            let service = employee.services[id]
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