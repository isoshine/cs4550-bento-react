import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Profile from "./containers/Profile";
import UserAdminContainer from "./containers/UserAdminContainer";
import SignUpContainer from "./containers/SignUpContainer";
import Search from "./components/Search";
import "./Bento.css";

class Bento extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Bento</h1>
                    <Route path="/"
                           exact={true}
                           component={Home}/>

                    <Route path="/search"
                           exact={true}
                           component={Search}/>

                    <Route path="/signup"
                           exact={true}
                           component={SignUpContainer}/>

                    <Route path="/signin"
                           exact={true}
                           component={SignIn}/>

                    <Route path="/profile"
                           exact={true}
                           component={Profile}/>

                    <Route path="/admin"
                           exact={true}
                           component={UserAdminContainer}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Bento;