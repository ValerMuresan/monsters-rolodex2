import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monster" />
        <h3>{props.monster.name}</h3>
        <h4>{props.monster.email}</h4>
        <p>{props.monster.username}</p>
        <p>{props.monster.phone}</p>
    </div>
)

