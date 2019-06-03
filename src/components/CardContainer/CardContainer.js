import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({presidents}) => {
    const displayPresidents = presidents.map(president => {
        return(<Card {...president} key={president.id}/>)
    })
    return(
        <div>
            {displayPresidents}
        </div>
    )
}

export default CardContainer;
