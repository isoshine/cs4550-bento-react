import React from "react";

export default class SignUp extends React.Component {
        state = {
                user: this.props.user,
                first: "",
                last: "",
                username: "",
                password: ""
        };

        render() {
                return (
                    <div className="mx-auto container">

                            <div className="container">

                                    <div className="form-group row">
                                            <label className="col-sm-3 col-form-label"
                                                   htmlFor="first">First Name</label>
                                            <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) => this.setState({first: e.target.value})}
                                                        className="form-control bento-field bento-first"
                                                        id="first"
                                                        type="text"
                                                        placeholder="Joe"/>
                                            </div>
                                    </div>

                                    <div className="form-group row">
                                            <label className="col-sm-3 col-form-label"
                                                   htmlFor="last">Last Name</label>
                                            <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) => this.setState({last: e.target.value})}
                                                        className="form-control bento-field bento-last"
                                                        id="last"
                                                        type="text"
                                                        placeholder="Johnson"/>
                                            </div>
                                    </div>

                                    <div className="form-group row">
                                            <label className="col-sm-3 col-form-label"
                                                   htmlFor="username">Username</label>
                                            <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) => this.setState({username: e.target.value})}
                                                        className="form-control bento-field bento-username"
                                                        id="username"
                                                        type="text"
                                                        placeholder="joe123"/>
                                            </div>
                                    </div>

                                    {/*<div className="form-group row">*/}
                                    {/*        <label className="col-sm-3 col-form-label"*/}
                                    {/*               htmlFor="email">Email</label>*/}
                                    {/*        <div className="col-sm-9">*/}
                                    {/*                <input*/}
                                    {/*                    placeholder="joe@northeastern.edu"*/}
                                    {/*                    className="form-control bento-field bento-email"*/}
                                    {/*                    id="email"*/}
                                    {/*                    type="text"/>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}

                                    <div className="form-group row">
                                            <label className="col-sm-3 col-form-label"
                                                   htmlFor="password">Password</label>
                                            <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) => this.setState({password: e.target.value})}
                                                        className="form-control bento-field bento-password"
                                                        id="password"
                                                        type="password"
                                                        placeholder="********"
                                                        title="passwords must be at least 8 characters"/>
                                            </div>
                                    </div>

                                    <div className="form-group row">
                                            <label className="col-sm-3 col-form-label"
                                                   htmlFor="password">Verify Password</label>
                                            <div className="col-sm-9">
                                                    <input
                                                        className="form-control bento-field bento-password"
                                                        id="password"
                                                        type="password"
                                                        placeholder="********"
                                                        title="passwords must be at least 8 characters"/>
                                            </div>
                                    </div>

                                    <div className="float-left btn btn-primary bento-button bento-register"
                                         onClick={() => this.props.createUser(
                                             this.state.first,
                                             this.state.last,
                                             this.state.username,
                                             this.state.password)}>
                                            Sign Up
                                    </div>

                                    <br/>

                                    <div className="float-right">Already have an account?</div>
                                    <br/>
                                    <a className="float-right bento-link bento-login"
                                       href="#">
                                            Sign in
                                    </a>

                                    <a className="float-left" href="#">Cancel</a>

                            </div>
                    </div>
                )
        }
}