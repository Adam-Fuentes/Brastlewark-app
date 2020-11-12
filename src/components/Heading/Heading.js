import React from 'react';

import "./Heading.css";
import Search from "../Search/Search";

const heading = () => (
    <header className="Heading">
        <div className="Heading__Text-box">
            <h1 className="Heading-primary">Brastlewark</h1>
            <Search />
        </div>
    </header>
)

export default heading;