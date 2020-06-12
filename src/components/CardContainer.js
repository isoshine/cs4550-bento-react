import React from "react";
import posed, {PoseGroup} from 'react-pose';

const CardContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: ({ i }) => {
            console.log(i);
            return 300 + (i * 200);
        },
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 20,
        opacity: 0,
    },
});

export default CardContainer;