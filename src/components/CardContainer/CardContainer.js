import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({presidents}) => {
    const displayPresidents = presidents.map(president => {
        return(<Card {...president} key={president.number}/>)
    })
    return(
        <div className='card-container'>
            {displayPresidents}
        </div>
    )
}

export default CardContainer;
