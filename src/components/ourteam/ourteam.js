import React, { useState } from 'react';

import Bryan from './bryan/bryan';
import { OurteamWrap } from './ourteamStyles';

function Ourteam () {
    const [bryanText, setBryanText] = useState(0);

    const expandText = () => {
        setBryanText(!bryanText);
    }

    return (
        <OurteamWrap id="ourteam">
            <div className="inner">
                <Bryan expandText={expandText} bryanText={bryanText} />
            </div>
        </OurteamWrap>
    )
}

export default Ourteam;