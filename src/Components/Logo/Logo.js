import React from 'react';
import Tilt  from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return ( 
        <div className="ma3 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"><img className="pt1" alt="brain-logo" src={brain} /></div>
            </Tilt>
        </div>
     );
}
 
export default Logo;