import React from 'react';
import './Title.scss';

const Title = ({titles, locations}) => {
    return (
        <div className='lodgingTitles'>
            <h1>{titles}</h1>
            <p>{locations}</p>
        </div>
    );
};

export default Title;