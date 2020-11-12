import React from 'react';

import "./Search.css";

const search = () => {
    return(
        <form>
            <input type="text" placeholder="Search Citicens"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default search;