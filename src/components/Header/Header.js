import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <img src={require('@/assets/LOGO.png')} alt='Logo du site Kasa'/> 
            <ul>
                <li><NavLink 
                    to='/Home'
                    className={({isActive}) =>
                        isActive ? "active" : ""
                    }
                >
                    Accueil
                </NavLink>
                </li>
                <li><NavLink 
                    to='/About'
                    className={({isActive}) =>
                        isActive ? "active" : ""
                    }
                >
                    A Propos
                </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;