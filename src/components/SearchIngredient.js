import React from "react";

class SearchIngredient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            recipes: []
        }
    }

    ingredChanged = event =>
        this.setState({ingredients: event.target.value});

    searchRecipe = () =>
        //console.log(this.state.ingredients);
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ignorePantry=true&ingredients=apples%252Cflour%252Csugar`, {
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
                <h2>Search by Ingredient</h2>
                <div className="input-group">
                    <input type="text"
                           value={this.state.ingredients}
                           onChange={this.ingredChanged}
                           className="form-control"
                           placeholder="ingredients"/>
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

export default SearchIngredient;