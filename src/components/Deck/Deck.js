import React from 'react';

import "./Deck.scss";
import Card from "../Card/Card";
import Search from "../Search/Search";

const deck = () => (
    <div className="deck">
        <div className="deck__search">
            <Search />
        </div>
        <div className="row">
            <div className="col-1-of-3">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
)

export default deck;