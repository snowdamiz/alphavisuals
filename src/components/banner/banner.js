import React from 'react';

import { BannerWrap } from './bannerStyles';
import arrow from '../../assets/down_arrow.svg';
import fb from '../../assets/fb.svg';
import tw from '../../assets/tw.svg';
import ig from '../../assets/ig.svg';
import pt from '../../assets/pt.svg';

function Banner() {
    return (
        <BannerWrap>
            <h1>Alpha Visuals</h1>
            <h2 className="slogan"> Northwest</h2>
            {/* <div className="line"></div> */}
            <div className="socials">
                <img src={fb} />
                <img src={ig} />
                <img src={pt} />
                <img src={tw} />
            </div>
            {/* <div className="arrow">
                <img src={arrow} />
            </div> */}
        </BannerWrap>
    )
}

export default Banner;