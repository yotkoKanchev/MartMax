import React, { useState, useEffect, useContext, Component } from 'react'
import { fetchData, editData } from "./../../firebase";

const Edit_Employees = (props) => {

    const initialFieldValues = {
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        fetchData('employees', setValues, null);
    }, [])

    // const handleInputChange = e => {
    //     var { name, value } = e.target;
    //     setValues({
    //         ...values,
    //         [name]: value
    //     })
    // }

    const handleFormSubmit = e => {
        e.preventDefault();
        editData('employees', null, values);
    }

    // console.log(values)
    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редактиране на Служители</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {Object.keys(values).map((key) => (
                        <form key={key} autoComplete="off" className="col-md-5 mr-5" onSubmit={handleFormSubmit}>
                            <div className="form-group input-group">
                                <div className="input-group-text">
                                    <span>Имена</span>
                                </div>
                                <input className="form-control" name="name"
                                    value={values[key].name}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-text">
                                    <span>Телефон</span>
                                </div>
                                <input className="form-control" name="phone"
                                    value={values[key].phone}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-text">
                                    <span>Длъжност</span>
                                </div>
                                <input className="form-control" name="title"
                                    value={values[key].title}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-text">
                                    <span>Снимка</span>
                                </div>
                                <input className="form-control" name="img"
                                    value={values[key].img}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <p>Дейности:</p>
                            {Object.keys(values[key].services).map((service) => (
                                <div div className="form-group input-group">
                                    <input className="form-control" name="phone"
                                        value={values[key].services[service]}
                                    // onChange={handleInputChange}
                                    />
                                </div>
                            ))
                            }
                            <div className="form-group">
                                <input type="submit" value='Промени' className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Edit_Employees