import React, { useState, useEffect } from 'react'
import { editData } from "./../../firebase";
import { Redirect } from "react-router";

const Employee = (props) => {

    const initialFieldValues = {
        name: '',
        phone: '',
        title: '',
        img: '',
        services: '',
        redirectToReferrer: false,
    }

    var [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.employeeObjects[props.currentId]
            })
    }, [props.currentId, props.employeeObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        editData(`employees/${props.currentId}`, null, values);
        setValues({
            redirectToReferrer: true
        });
    }

    const redirectToReferrer = values.redirectToReferrer;
    if (redirectToReferrer) {
        return <Redirect to="/about" />
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span>Имена</span>
                    </div>
                    <input className="form-control" name="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span>Длъжност</span>
                    </div>
                    <input className="form-control" name="title"
                        value={values.title}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span>Телефон</span>
                    </div>
                    <input className="form-control" name="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span>Снимка</span>
                    </div>
                    <input className="form-control" name="img"
                        value={values.img}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span>Дейности</span>
                    </div>
                    <input className="form-control" name="services"
                        value={values.services}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-group col-md-12">
                <input type="submit" value="Промени" className="btn btn-primary btn-block" />
            </div>
            <div className="form-group col-md-12 d-flex justify-content-center">
                <div className="img-container">
                    <img src={values.img} alt={values.name} className="img-fluid rounded-circle"></img>
                </div>
            </div>
        </form>
    );
}

export default Employee;