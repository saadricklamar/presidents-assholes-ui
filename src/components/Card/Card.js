import React from 'react';
import './Card.css';

const Card = ({number, president, birth_year, death_year, took_office, left_office, party}) => {
    return (
        <article className='card'>
            <p>Number: {number}</p>
            <p>Name: {president}</p>
            <p>Born: {birth_year}</p>
            <p>Died: {death_year}</p>
            <p>Took Office: {took_office}</p>
            <p>Left Office: {left_office}</p>
            <p>Party: {party}</p>
        </article>
    )
}

export default Card;