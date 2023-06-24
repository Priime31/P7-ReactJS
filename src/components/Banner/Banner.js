import React from 'react';

import "./banner.scss";

const Banner = ({image, altTxt, texte, mobileHeight}) => {
    return (
        <div className={mobileHeight ? 'bannerDiv mobileHeight' : 'bannerDiv'}>
            <img src={image} alt={altTxt}/>
            <p>{texte}</p>
        </div>
    );
};

export default Banner;