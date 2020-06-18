import React from "react";
import PantryItems from "../components/PantryItems";
import Following from "../components/Following";
import UserInfo from "../components/UserInfo";

const Profile = () =>
    <div className="container">
        <div className="alert alert-primary" role="alert">
            Your updates have been saved.
        </div>
        <h2>Profile</h2>

        <div className="row">
            <div className="bento-profile col-8 col-lg-9 col-md-8">
                <div>
                    <UserInfo/>
                </div>
            </div>

            <div className="bento-profile col-4 col-lg-3 col-md-4">
                {/*<div>*/}
                {/*    <PantryItems/>*/}
                {/*</div>*/}
                <div>
                    <Following/>
                </div>
            </div>
        </div>

        <a className="btn btn-success btn-block bento-button bento-update">
            Update
        </a>

        <a className="btn btn-danger btn-block bento-button bento-logout">
            Sign out
        </a>

    </div>;

export default Profile;