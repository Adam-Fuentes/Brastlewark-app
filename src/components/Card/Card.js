import React from 'react';

import "./Card.scss";

const card = () => {
    return(
        <div className="card">
            <div className="card__picture card__picture--1">
                &nbsp;
            </div>
            <h3 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Name FirstName</span>
            </h3>
            <div className="card__details">
                <ul>
                    <li>Age: age</li>
                    <li>Weight: weight</li>
                    <li>Height: height</li>
                    <li>hair_color: hair_color</li>                    
                </ul>                
                <p className="card__text">friends</p>
                <p className="card__text">professions</p>
            </div>
        </div>
    )
}

export default card;