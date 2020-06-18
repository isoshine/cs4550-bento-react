
const getIngredientsById = (recipeId) => {
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/ingredientWidget.json`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "52626cfb7bmsh72c1608e1117baep1b0596jsnd117a4593bba"
        }
    })
        .then(response => response.json());
};

const getInformationById = (recipeId) => {
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "52626cfb7bmsh72c1608e1117baep1b0596jsnd117a4593bba"
        }
    })
        .then(response => response.json());
};

const getDirectionsById = (recipeId) => {
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/324694/analyzedInstructions?stepBreakdown=false", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "52626cfb7bmsh72c1608e1117baep1b0596jsnd117a4593bba"
        }
    })
        .then(response => response.json());
};

export default {
    getInformationById,
    getDirectionsById,
    getIngredientsById
}