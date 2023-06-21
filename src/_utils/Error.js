import React from 'react';

import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
    return (
        <div className="Error">
            <div>
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div>
                <p><Link to="/Home">Retourner sur la page d'accueil</Link></p>
            </div>
        </div>
    );
};

export default Error;