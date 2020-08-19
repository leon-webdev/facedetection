import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
    return ( 
        <nav className="SignOut">
            <input onClick={() => onRouteChange('signin') } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Salir" />
        </nav>
     );
}
 
export default Navigation; 