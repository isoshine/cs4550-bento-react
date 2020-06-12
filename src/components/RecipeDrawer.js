import React from "react";

function RecipeDrawer({recipe}) {
    return (
        <div style={{position: 'absolute', height: '99vh', overflow: 'scroll'}}>
            <div style={{height: '300px', width:'420px', backgroundImage: `url(${recipe.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center', margin: '30px', marginLeft: '40px', justifyContent: 'center', alignItems: 'center'}}>
            </div>
            <div>
                <div style={{marginLeft:'40px', marginTop: '15px', fontSize:'30px', fontWeight:'bold', color:'#9b9b9b'}}>{recipe.title}</div>
                <div style={{marginLeft:'40px', marginTop: '8px', fontSize:'15px', color:'#9b9b9b'}}>Ready in: {recipe.readyInMinutes} minutes</div>
            </div>
        </div>
    )
}

export default RecipeDrawer;