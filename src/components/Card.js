import React from "react";

import './Card.css';

const Card = ({cover, title}) => {
    return (
        <div className="Card">
            <img src={cover} alt=''/>
            <p>{title}</p>
        </div>
    )
}

export default Card;
