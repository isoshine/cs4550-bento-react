import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import SearchIngredient from "./SearchIngredient";
import SearchKeyword from "./SearchKeyword";

class Bento extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Bento</h1>
                    <Route path="/"
                           exact={true}
                           component={Home}/>

                    <Route path="/ingredient"
                           exact={true}
                           component={SearchIngredient}/>

                    <Route path="/keyword"
                           exact={true}
                           component={SearchKeyword}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Bento;