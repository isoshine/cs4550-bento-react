import React from 'react';
import {Drawer} from '@blueprintjs/core';
import RecipeGrid from "./RecipeGrid";
import RecipeDrawer from "../containers/RecipeDrawer";

export default function Results({recipes}) {
    const [drawer, setDrawer] = React.useState(null);

    return (
        <div>
            <RecipeGrid recipes={recipes}
                        setDrawer={setDrawer}/>
            <Drawer isOpen={!!drawer}
                    onClose={() => setDrawer(null)}
                    size='500px'>
                {drawer ? (
                    <RecipeDrawer recipe={drawer}/>
                ) : <></>}
            </Drawer>
        </div>
    )
}

