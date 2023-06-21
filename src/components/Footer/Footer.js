import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={require('@/assets/LOGO.png')} alt='Logo du site Kasa'/>
            <p>© 2020 Kasa. All rights deserved</p>
        </footer>
    );
};

export default Footer;