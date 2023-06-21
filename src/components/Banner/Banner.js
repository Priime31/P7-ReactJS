import React from 'react';

import "./Banner.css";

const Banner = ({image, altTxt, texte, mobileHeight}) => {
    return (
        <div className={mobileHeight ? 'BannerDiv mobileHeight' : 'BannerDiv'}>
            <img src={image} alt={altTxt}/>
            <p>{texte}</p>
        </div>
    );
};

export default Banner;