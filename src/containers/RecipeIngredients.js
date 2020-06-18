// import React from "react";
// import recipeService from "../services/RecipeService";
//
// class RecipeIngredients extends React.Component {
//     state = {
//         recipeId: this.props.recipeId,
//         ingredients: []
//     };
//
//     componentDidMount() {
//         recipeService.getIngredientsById(this.state.recipeId)
//             .then(actualArrayOfIngredients => this.setState({ingredients: actualArrayOfIngredients}));
//     }
//
//     // setRecipeId = (recipeId) => {
//     //     this.props.history.push(`/keyword/${recipeId}`)
//     // };
//
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         // this.state.ingredients.map(
//                         //     step => <li>{step.amount.us.value} {step.amount.us.unit} {step.name}</li>
//                         // )
//                         this.state.ingredients.map(element =>
//                             <Ingredient val={element.amount.us.value}
//                                         unit={element.amount.us.unit}
//                                         ingredient={element.name}/>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
//
// class Ingredient extends React.Component {
//     state = {
//         val: this.props.val,
//         unit: this.props.unit,
//         ingredient: this.props.ingredient
//     };
//
//     render() {
//         return (
//             <li>
//                 {this.state.val} {this.state.unit} {this.state.ingredient}
//             </li>
//         )
//     }
// }
//
// export default RecipeIngredients;