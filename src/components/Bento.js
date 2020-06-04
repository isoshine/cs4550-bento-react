import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import BentoClient from "../bento/BentoClient";

export default class Bento extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <h1>Bento</h1>
                        <Route path="/"
                               exact={true}
                               component={BentoClient}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}