import React from "react";

const SignIn = () =>
    <div>
        <div className="mx-auto container">
            <h2>Sign-in</h2>

            <div className="form-group row">
                <label className="col-sm-3 col-form-label"
                       htmlFor="username">Username</label>
                <div className="col-sm-9">
                    <input
                        readOnly
                        className="form-control bento-field bento-username"
                        id="username"
                        type="text"
                        placeholder="joe123"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-3 col-form-label"
                       htmlFor="password">Password</label>
                <div className="col-sm-9">
                    <input
                        className="form-control bento-field bento-password"
                        id="password"
                        type="password"
                        placeholder="********"
                        title="passwords must be at least 8 characters"/>
                </div>
            </div>

            <a href="#"
               className="float-left btn btn-primary bento-button bento-login">
                Sign In
            </a>

            <a href="#"
               className="float-right bento-link bento-forgot-password">Forgot Password?</a>
            <br/>

            <div className="float-right">Don't have an account?</div>
            <br/>

            <a href="#"
               className="float-right bento-link bento-register">
                Sign up
            </a>

            <a className="float-left" href="#">Cancel</a>

        </div>
    </div>;

export default SignIn;