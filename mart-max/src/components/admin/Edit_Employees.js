import React, { useState, useEffect } from 'react'

import Employee from './Employee';
import { fetchData } from "./../../firebase";

const Edit_Employees = () => {

    var [employeeObjects, setEmployeeObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        fetchData('employees', setEmployeeObjects, null);
    }, [])

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row items-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редактиране на Служители</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row items-center'>
                    <div className="col-md-5">
                        {
                            Object.keys(employeeObjects).map((key) => (
                                <input id="person" key={key} type="button" className="mb-4 btn btn-primary col-md-12" key={key} value={employeeObjects[key].name} onClick={() => { setCurrentId(key) }} />
                            ))
                        }
                    </div>
                    <div className="col-md-7 person-container">
                        <Employee {...({ currentId, employeeObjects })} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Edit_Employees