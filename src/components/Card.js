import React from "react";

function Card({recipe, setDrawer}) {
    return(
        <div className='tile'>
            <div style={{height:'300px', width:'300px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:'#ffffff', cursor: 'pointer'}}
                 onClick={() => setDrawer(recipe)}>
                <div style={{height:'150px', width:'150px',borderRadius: '50%', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center', margin: '13px'}}/>
                <div style={{fontWeight: 'bold', fontSize: '20px', margin: '10px', color:'#9b9b9b'}}>{recipe.title}</div>
                <div style={{margin: '10px', fontSize: '15px', bottom:'0', color:'#848484'}}>Ready in: {recipe.readyInMinutes} minutes</div>
            </div>
        </div>
    )
}

export default Card;