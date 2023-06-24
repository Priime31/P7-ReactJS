import React from 'react';
import Banner from '../components/Banner/Banner';
import AboutBanner from '../assets/AboutBanner.png';
import Collapser from '../components/Collapser/Collapser';
import aboutFile from '../assets/about.json';
import './about.scss';

const About = () => {
    return (
        <div>

            <Banner image={AboutBanner} altTxt={'Chaîne de montagnes aux pics blancs et coiffés par des nuages par temps ensoleillé avec une forêt de résineux au premier plan'} mobileHeight/>
            
            <div className='about_collapser_block'>
                {
                    aboutFile.map((item) => (
                        <Collapser key={item.id}title={item.title} content={item.description}/>
                    ))
                }
            </div>
        </div>
    );
};

export default About;