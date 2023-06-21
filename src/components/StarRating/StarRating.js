import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";
import "./starRating.scss";

library.add(fas, faStar);

const StarRating = ({ stars }) => {
    let starArray = [];
    const generateColoredStars = () => {
        for (let i = 0; i < stars; i++) {
            starArray.push(
                <li key={i}>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </li>
            );
        }
    };
    const generateGreyStars = () => {
        for (let i = 0; i < 5 - stars; i++) {
            starArray.push(
                <li key={i + stars} className="grey_stars">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </li>
            );
        }
    };
    generateColoredStars();
    generateGreyStars();

    return <ul className="rating_block">{starArray.map((star) => star)}</ul>;
};

export default StarRating;
