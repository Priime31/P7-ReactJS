import React from 'react';
import Banner from '../components/Banner';
import AboutBanner from '../assets/AboutBanner.png';

const About = () => {
    return (
        <div>

            <Banner image={AboutBanner} altTxt={'Chaîne de montagnes aux pics blancs et coiffés par des nuages par temps ensoleillé avec une forêt de résineux au premier plan'} mobileHeight/>
            
        </div>
    );
};

export default About;