import React from "react";

class SearchRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            recipes: []
        }
    }

    keywordChanged = event =>
        this.setState({keyword: event.target.value});

    searchRecipe = () =>
        //console.log(this.state.keyword);
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?
        &query=${this.state.keyword}`,
            {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "52626cfb7bmsh72c1608e1117baep1b0596jsnd117a4593bba"
            }
        }).then(response => response.json())
            .then(this.renderRecipes);

    renderRecipes = (response) => {
        this.setState({
            recipes: response.results
        })
    };

    render() {
        return (
            <div>
                <h2>Search</h2>
                <div className="input-group">
                    <input type="text"
                           value={this.state.keyword}
                           onChange={this.keywordChanged}
                           className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        <button onClick={this.searchRecipe} className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>

                <div>
                <ul className="list-group">
                {
                    this.state.recipes.map(
                        (recipe, index) =>
                            <li key={index} className="list-group-item">
                                {recipe.title}
                            </li>
                    )
                }
                </ul>
                </div>

            </div>
        )
    }
}

export default SearchRecipe;