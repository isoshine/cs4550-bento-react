import React from "react";
import RecipeIngredients from "./RecipeIngredients";
import RecipeDirections from "./RecipeDirections";
import RecipePage from "../components/RecipePage";


export default function RecipeDrawer({recipe}) {

    return (
        <div className="bento-div"
            style={{position: 'absolute', height: '99vh', overflow: 'scroll', backgroundColor: '#ffffff'}}>
            <div style={{height: '300px', width:'420px', backgroundImage: `url(https://www.spoonacular.com/recipeImages/${recipe.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center', margin: '30px', marginLeft: '40px', justifyContent: 'center', alignItems: 'center'}}>
            </div>

            <div>
                <div onClick={() => RecipePage({recipe})}
                     style={{marginLeft:'40px', marginTop: '15px', fontSize:'30px', fontWeight:'bold', color:'#9b9b9b'}}>
                    {recipe.title}
                </div>

                <div style={{marginLeft:'40px', marginTop: '8px', fontSize:'15px', color:'#9b9b9b'}}>Ready in: {recipe.readyInMinutes} minutes</div>

                <div style={{marginLeft:'40px', marginTop: '20px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>INGREDIENTS</div>

                {/*map ingredients*/}
                <div style={{color:'#9b9b9b', marginRight:'40px', marginLeft:'40px', marginTop:'8px'}}>

                </div>

                <div style={{marginLeft:'40px', marginTop: '20px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>DIRECTIONS</div>

                {/*map directions*/}
                <div style={{color:'#9b9b9b', marginRight:'40px', marginLeft:'15px', marginTop:'8px'}}>

                </div>
            </div>
        </div>
    )
}

//export default RecipeDrawer;