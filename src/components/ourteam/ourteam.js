import React, { useState } from 'react';

import Bryan from './bryan/bryan';
import Chris from './chirs/chris';
// import Jonny from './jonny/jonny';
import Casey from './casey/casey';
import { OurteamWrap } from './ourteamStyles';

function Ourteam () {
    const [caseyText, setCaseyText] = useState(0);
    const [caseyGallery, setCaseyGallery] = useState(0);

    const [bryanText, setBryanText] = useState(0);
    const [bryanGallery, setBryanGallery] = useState(0);

    const [chrisText, setChrisText] = useState(0);
    const [chrisGallery, setChrisGallery] = useState(0);

    // const [jonnyText, setJonnyText] = useState(0);
    // const [jonnyGallery, setJonnyGallery] = useState(0);

    const expandCaseyText = () => setCaseyText(!caseyText)
    const expandCaseyGallery = () => setCaseyGallery(!caseyGallery)

    const expandBryanText = () => setBryanText(!bryanText)
    const expandBryanGallery = () => setBryanGallery(!bryanGallery)

    const expandChrisText = () => setChrisText(!chrisText)
    const expandChrisGallery = () => setChrisGallery(!chrisGallery)

    // const expandJonnyText = () => setJonnyText(!jonnyText)
    // const expandJonnyGallery = () => setJonnyGallery(!jonnyGallery)

    return (
        <OurteamWrap id="ourteam">
            <div className="inner">
                <Casey 
                    expandCaseyText={expandCaseyText}
                    expandCaseyGallery={expandCaseyGallery}
                    caseyGallery={caseyGallery}
                    caseyText={caseyText} />
                <Bryan
                    expandBryanText={expandBryanText}
                    expandBryanGallery={expandBryanGallery}
                    bryanGallery={bryanGallery}
                    bryanText={bryanText} />
                <Chris 
                    expandChrisText={expandChrisText}
                    expandChrisGallery={expandChrisGallery}
                    chrisText={chrisText}
                    chrisGallery={chrisGallery} />
                {/* <Jonny 
                    expandJonnyText={expandJonnyText}
                    expandJonnyGallery={expandJonnyGallery}
                    jonnyText={jonnyText}
                    jonnyGallery={jonnyGallery} /> */}
            </div>
        </OurteamWrap>
    )
}

export default Ourteam;