import React from 'react';
import {useParams} from 'react-router';

const Display = (props) => {
    const {value, color="black", background="white"} = useParams();
    return (
        <div>
            {!isNaN(+value) ?
            <p style={{backgroundColor: background, color: color}}>
                The number is: {value}
            </p> :
            <p style={{backgroundColor: background, color: color}}>
                The word is: {value}
            </p>
            }
        </div>
    );
};

export default Display;