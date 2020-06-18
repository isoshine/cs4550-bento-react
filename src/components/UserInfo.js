import React from "react";

const UserInfo = () =>
    <div className="container">
        <div className="form-group row">
            <label className="col-sm-3 col-form-label"
                   htmlFor="username">First Name</label>
            <div className="col-sm-9">
                <input
                    readOnly
                    className="form-control bento-field bento-first"
                    id="first"
                    type="text"
                    placeholder="Joe"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-3 col-form-label"
                   htmlFor="username">Last Name</label>
            <div className="col-sm-9">
                <input
                    readOnly
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

        <div className="form-group row">
            <label className="col-sm-3 col-form-label"
                   htmlFor="email">Email</label>
            <div className="col-sm-9">
                <input
                    placeholder="joe@northeastern.edu"
                    className="form-control bento-field bento-email"
                    id="email"
                    type="text"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-3 col-form-label"
                   htmlFor="dob">Date of Birth</label>
            <div className="col-sm-9">
                <input
                    className="form-control bento-field bento-dob"
                    id="dob"
                    type="date"
                    value="yyyy-mm-dd"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-3 col-form-label">
                Level</label>
            <div className="col-sm-9">
                <select className="bento-field bento-level form-control">
                    <option value="BEGINNER">Beginner</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                </select>
            </div>
        </div>
    </div>;

export default UserInfo;