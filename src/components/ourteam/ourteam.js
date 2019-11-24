import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../assets/bryan/IMG1.JPG';
import IMG2 from '../../assets/bryan/IMG2.JPG';
import IMG3 from '../../assets/bryan/IMG3.JPG';
import IMG4 from '../../assets/bryan/IMG4.JPG';
import IMG5 from '../../assets/bryan/IMG5.JPG';
import IMG6 from '../../assets/bryan/IMG6.JPG';
import IMG7 from '../../assets/bryan/IMG7.JPG';
import IMG8 from '../../assets/bryan/IMG8.JPG';
import IMG9 from '../../assets/bryan/IMG9.JPG';
import IMG10 from '../../assets/bryan/IMG10.JPG';
import { OurteamWrap } from './ourteamStyles';

function Ourteam () {
    const images = [
        { id: 1, img: IMG1 },
        { id: 2, img: IMG2 },
        { id: 3, img: IMG3 },
        { id: 4, img: IMG4 },
        { id: 5, img: IMG5 },
        { id: 7, img: IMG7 },
        { id: 6, img: IMG6 },
        { id: 8, img: IMG8 },
        { id: 9, img: IMG9 },
        { id: 10, img: IMG10 },
    ]

    return (
        <OurteamWrap id="ourteam">
            <div className="inner">
                <div className="section" id="bryan">
                    <div className="profile">
                        <div className="image"></div>
                        <h2>Bryan</h2>
                        <p>My name is Bryan loop. I grew up in Portland Oregon. I started 
                            doing photography back in 2009 when I was in high school. From 
                            there I graduated in 2011 from Benson Polytechnic. I never thought 
                            that I would keep doing photography from that point because I came 
                            from a low income house hold that could not afford equipment ...
                            <span className="hidden">
                                I finally was able to buy my own camera in 2015 it was a cheap Nikon 
                                d5300 which was great at the time.
                                I had that until I was asked to start doing weddings as a secondary 
                                shooter in 2018 which is when I got the camera I am using now a Nikon 
                                D750. I would describe my photography to be clean and creative. I am 
                                quick to adapt to lighting. Coming from a dance background I would say 
                                I am pretty creative. With all that I have learned I will let my work 
                                say the rest! I look forward to getting to know you now!”
                            </span>
                        </p>
                        <button>Learn More</button>
                        <div className="profileNav">
                            <Link smooth to="/#home" className="nextBtn"></Link>
                        </div>
                    </div>
                    <div className="bryanGallery">
                        <div className="galleryInner">
                            {/* <h2>My Portfolio</h2> */}
                            {images.map((el, key) => {
                                return <img src={el.img} key={el.id} className="p_imgs"></img>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </OurteamWrap>
    )
}

export default Ourteam;