import React from 'react';

import "./Footer.css"

const footer = () => {
    let year = new Date().getFullYear();
    
    return(
        <footer className="Footer">
            <p className="Footer__copyright">Adam Fuentes Development &copy; {year}</p>
        </footer>
    )
}

export default footer;