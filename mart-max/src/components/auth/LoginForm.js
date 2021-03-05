import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { appAuth } from "./../../firebase";
import { AuthContext } from "./Auth.js";

const LoginForm = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await appAuth
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/admin/dashboard");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin/dashboard" />;
    }

    return (
        <div className="site-section" data-aos="fade">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h2 className="site-section-heading text-center">Вход</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-5">
                        <form onSubmit={handleLogin}>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-white" htmlFor="subject">Потребител</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-white" htmlFor="email">Парола</label>
                                    <input type="password" id="password" className="form-control" placeholder="Password" name="password" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit" value="Вход" className="btn btn-primary py-2 px-4 text-white" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default withRouter(LoginForm);
