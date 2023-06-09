import React from 'react';
import Banner from '../components/Banner';
import HomeBanner from '../assets/HomeBanner.png';
import Card from '../components/Card';
import lodgingList from '../assets/lodging.json';

import './Home.css';
 
const Home = () => {
    return (
        <div className='Home'>

            <Banner image={HomeBanner} altTxt='Falaises en bord de plage par temps brouillardeux' texte='Chez vous, partout et ailleurs'/>

            <div className='cardWrap'>
                {lodgingList.map((lodging, index) => (
                    <Card key={index} cover={lodging.cover} title={lodging.title}/>
                ))}
            </div>

        </div>
    );
};

export default Home;