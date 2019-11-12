import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.item.id}?set=set4&size=180x200`} />
        <h2> { props.item.name } </h2> 
        <p> { props.item.email } </p>
    </div>
}