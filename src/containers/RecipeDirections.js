// import React from "react";
// import recipeService from "../services/RecipeService";
//
// class RecipeDirections extends React.Component {
//     state = {
//         recipeId: this.props.recipeId,
//         directions: []
//     };
//
//     componentDidMount() {
//         recipeService.getDirectionsById(this.state.recipeId)
//             .then(actualArrayOfDirections => this.setState({directions: actualArrayOfDirections}));
//     }
//
//
//     setRecipeId = (recipeId) => {
//         this.props.history.push(`/keyword/${recipeId}`)
//     };
//
//     render() {
//         return (
//             <div>
//                 <ol>
//                     {}
//                 </ol>
//             </div>
//         )
//     }
// }
//
// export default RecipeDirections;