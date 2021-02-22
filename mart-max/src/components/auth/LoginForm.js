import React, { useState, useEffect } from 'react'
import authService from './../../services/authSerivce'

const LoginForm = (props) => {
    const initialFieldValues = {
        email: '',
        password: '',
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        // console.log(values);
        authService.login(values)
        // props.addOrEdit(values)
    }

    return (
        <div className="site-section" data-aos="fade">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Вход</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-5">
                        <form autoComplete="off" onSubmit={handleFormSubmit}>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-white" htmlFor="subject">Потребител</label>
                                    {/* <input type="email" id="subject" className="form-control" name="email"
                                        value={values.email}
                                        onChange={handleInputChange} /> */}
                                    <input className="form-control" placeholder="Email" name="email"
                                        value={values.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-white" htmlFor="email">Парола</label>
                                    <input type="text" id="email" className="form-control" name="password"
                                        value={values.password}
                                        onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit" value="Вход" className="btn btn-primary py-2 px-4 text-white" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
