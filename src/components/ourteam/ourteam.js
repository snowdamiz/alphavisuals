import React, { useState } from 'react';

import Bryan from './bryan/bryan';
import { OurteamWrap } from './ourteamStyles';

function Ourteam () {
    const [bryanText, setBryanText] = useState(0);
    const [bryanGallery, setBryanGallery] = useState(0);

    const expandBryanText = () => setBryanText(!bryanText)
    const expandBryanGallery = () => setBryanGallery(!bryanGallery)

    return (
        <OurteamWrap id="ourteam">
            <div className="inner">
                <Bryan
                    expandBryanText={expandBryanText}
                    expandBryanGallery={expandBryanGallery}
                    bryanGallery={bryanGallery}
                    bryanText={bryanText} />
            </div>
        </OurteamWrap>
    )
}

export default Ourteam;