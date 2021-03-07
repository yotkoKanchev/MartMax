import React, { useState, useEffect } from 'react'
import { fetchData, editData } from "./../../firebase";
import { Redirect } from "react-router";

const Edit_Contact = (props) => {
    const initialFieldValues = {
        title: '',
        city: '',
        address: '',
        email: '',
    }

    var [values, setValues] = useState(initialFieldValues)
    var [redirectToReferrer, setRedirectToReferrer] = useState(false);

    useEffect(() => {
        fetchData('contacts', setValues, null);
    }, [])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        editData('contacts', null, values);
        setRedirectToReferrer({
            redirectToReferrer: true
        });
    }

    if (redirectToReferrer) {
        let path = props.child ? '/' + props.child : '/' + props.collection;
        return <Redirect to={path} />
    }

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редактиране на {values.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <form autoComplete="off" className="col-md-6" onSubmit={handleFormSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Заглавие</span>
                            </div>
                            <input className="form-control" name="title"
                                value={values.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Град</span>
                            </div>
                            <input className="form-control" name="city"
                                value={values.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Адрес</span>
                            </div>
                            <input className="form-control" name="address"
                                value={values.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Имейл</span>
                            </div>
                            <input className="form-control" name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value='Промени' className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit_Contact