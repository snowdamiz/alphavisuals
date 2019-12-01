import React, { useState } from 'react';

import Bryan from './bryan/bryan';
import Chris from './chirs/chris';
import { OurteamWrap } from './ourteamStyles';

function Ourteam () {
    const [bryanText, setBryanText] = useState(0);
    const [bryanGallery, setBryanGallery] = useState(0);

    const [chrisText, setChrisText] = useState(0);
    const [chrisGallery, setChrisGallery] = useState(0);

    const expandBryanText = () => setBryanText(!bryanText)
    const expandBryanGallery = () => setBryanGallery(!bryanGallery)

    const expandChrisText = () => setChrisText(!chrisText)
    const expandChrisGallery = () => setChrisGallery(!chrisGallery)

    return (
        <OurteamWrap id="ourteam">
            <div className="inner">
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
            </div>
        </OurteamWrap>
    )
}

export default Ourteam;