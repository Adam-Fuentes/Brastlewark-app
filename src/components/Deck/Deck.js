import React from 'react';

import "./Deck.css";
import Card from "../Card/Card";

const deck = () => (
    <div className="Deck">
        <h2>Citicens of Bratlewark</h2>
        <div className="Row">
            <div className="col-1-of-3">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
)

export default deck;