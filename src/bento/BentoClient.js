import React from "react";
import SearchRecipe from "./SearchRecipe";

export default class BentoClient extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchRecipe/>
            </div>
        )
    }
}