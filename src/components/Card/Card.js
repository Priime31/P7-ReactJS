import React from "react";

import './card.scss';
import { Link } from "react-router-dom";

const Card = ({cover, title, lodgingId}) => {
    return (
        <Link to={`/lodging/${lodgingId}`} className="card">
            <img src={cover} alt=''/>
            <p>{title}</p>
        </Link>
    )
}

export default Card;