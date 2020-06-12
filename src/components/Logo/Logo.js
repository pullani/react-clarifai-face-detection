import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0 pa3 center'>
            <Tilt className="Tilt br3 shadow-1" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '1px'}}alt='logo' src={brain}></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;

//<Tilt className="Tilt br3 ba dark-gray b--black-10 shadow-5 center" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
//<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >