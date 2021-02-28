import React, { useState, useEffect } from 'react'

import { readFromDb } from "./../fetcher";

const Contact = () => {
    var [contacts, setContacts] = useState({})
    var [employees, setEmployees] = useState({})

    useEffect(() => {
        readFromDb('contacts', setContacts, null);
        readFromDb('employees', setEmployees, null);
    }, [])

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Контакти</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 ml-auto">
                        <div className="mb-5 mt-5">
                            <p className="mb-0 font-weight-bold text-white">Адрес</p>
                            <p className="mb-2 large-font">{contacts.city}</p>
                            <p className="mb-4 large-font">{contacts.address}</p>
                            <p className="mb-0 font-weight-bold text-white">Телефони</p>
                            {
                                Object.keys(employees).map((key) => {
                                    let employee = employees[key];
                                    let nameArgs = employee.name.split(' ');
                                    let name = 'инж. ' + nameArgs[0][0] + '. ' + nameArgs[1];
                                    return (
                                        <p key={name} className="mb-2"><span>{name} - </span><a href="+359 899874204">+359 899874204</a></p>
                                    )
                                })
                            }
                            <p className="mb-0 mt-4 font-weight-bold text-white">Имейл</p>
                            <p className="mb-0"><a href="mailto: {contactsInfo.email}">{contacts.email}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact