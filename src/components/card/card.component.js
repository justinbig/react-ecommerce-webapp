import React from "react"

import "./card.style.css";

export const Card = props => {
    const {email,name,id} = props.monster; 
    return (
        <div className="card-container">
            <img alt="lobo" src={`https://robohash.org/${id}?set=set2&size=180x180` } />
            <h2 >{name}</h2>
            <p>{email}</p>
        </div>
    )
}