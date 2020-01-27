import React, { useState } from 'react';

import DJIMG from '../../assets/dj.jpg';
import Flyer from '../../assets/flyer.jpg';
import { DjWrap } from './djStyles';

function Dj(props) {
    const [showFlyer, setShowFlyer] = useState(false);

    const toggleFlyer = () => {
        setShowFlyer(!showFlyer);
    }

    return (
        <DjWrap>
            <div className="djCont">
                <div className="djText">
                    <h1>Looking for a DJ?</h1>
                    <p>We are now offering a complete <br /> DJ service Ft. DJ Rian Simpson</p>
                    <button onClick={toggleFlyer}>{showFlyer ? 'Close' : 'Learn More'}</button>
                </div>
                <img src={DJIMG} />
            </div>
            {showFlyer ? (
                <div className="flyer" >
                    <img src={Flyer} />
                </div>
                
            ) : null }
            <button onClick={toggleFlyer}>{showFlyer ? 'Close' : 'Learn More'}</button>
        </DjWrap>
    )
}

export default Dj;