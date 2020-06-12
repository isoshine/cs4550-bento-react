import React from "react";
import posed, {PoseGroup} from 'react-pose';
import CardContainer from "./CardContainer";
import Card from "./Card";

const rowSize = 4;

function RecipeGrid({recipes, setDrawer}) {
    const grid = formatGrid(recipes);
    console.log(grid);
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => recipes.length > 0 ? setIsVisible(true) : setIsVisible(false), [recipes, setIsVisible]);

    return (
        <div style={{position: 'absolute', width: '100%', top: '25vh', height: '75vh', overflow: 'scroll'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <PoseGroup>
                        {grid.map((row, i) =>
                            <div style={{display: 'flex', flexDirection: 'row'}} key={i}>
                                <PoseGroup>
                                    {isVisible && row.map((recipe, j) => <CardContainer i={i * rowSize + j} key={j}><Card recipe={recipe} setDrawer={setDrawer} /></CardContainer>)}
                                </PoseGroup>
                            </div>)}
                    </PoseGroup>
                </div>
            </div>
        </div>
    )
}

function formatGrid(recipes) {
    console.log(recipes);
    const res = [];
    let row = [];
    for (let i = 0; i < recipes.length; i++) {
        row.push(recipes[i]);
        if ((i + 1) % rowSize === 0) {
            res.push(row);
            row = [];
        }
    }
    if (row.length > 0) {
        res.push(row);
    }
    return res;
}

export default RecipeGrid;