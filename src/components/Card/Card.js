import React from "react";

import './Card.css';
import { Link } from "react-router-dom";

const Card = ({cover, title, lodgingId}) => {
    return (
        <Link to={`/lodging/${lodgingId}`} className="Card">
            <img src={cover} alt=''/>
            <p>{title}</p>
        </Link>
    )
}

export default Card;