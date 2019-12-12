import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../../assets/bryan/IMG1.JPG';
import IMG2 from '../../../assets/bryan/IMG2.JPG';
import IMG3 from '../../../assets/bryan/IMG3.JPG';
import IMG4 from '../../../assets/bryan/IMG4.JPG';
import IMG5 from '../../../assets/bryan/IMG5.JPG';
import IMG6 from '../../../assets/bryan/IMG6.JPG';
import IMG7 from '../../../assets/bryan/IMG7.JPG';
import IMG8 from '../../../assets/bryan/IMG8.JPG';
import IMG9 from '../../../assets/bryan/IMG9.JPG';
import IMG10 from '../../../assets/bryan/IMG10.JPG';
import IMG11 from '../../../assets/bryan/IMG11.JPG';
import IMG12 from '../../../assets/bryan/IMG12.JPG';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import { BryanWrap } from './bryanStyles';
import BryanGallery from './bryanGallery';

function Bryan (props) {
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
        // { id: 10, img: IMG10 },
        // { id: 11, img: IMG11 },
        // { id: 12, img: IMG12 },
    ]

    return (
        <BryanWrap id="bryan">
            <div className="profile">
                <div className="image"></div>
                <h2>Bryan</h2>
                <p>My name is Bryan loop. I grew up in Portland Oregon. I started 
                    doing photography back in 2009 when I was in high school.
                    {props.bryanText ? (
                        <span>
                            From there I graduated in 2011 from Benson Polytechnic. I would describe my 
                            photography to be clean and creative.
                            I am quick to adapt to lighting. With all that I have learned I will let my work 
                            say the rest! I look forward to getting to know you now!”
                        </span>
                    ) : null }
                </p>
                <button onClick={props.expandBryanText}>{props.bryanText ? "Close" : "Learn More"}</button>
                <button onClick={props.expandBryanGallery} className="viewGallery">View Gallery</button>
                <div className="profileNav">
                    <Link smooth to="/#casey" className="nextBtn">
                        <img src={PrevBtn} className="prev" />
                    </Link>
                    <Link smooth to="/#chris" className="nextBtn">
                        <img src={NextBtn} className="next" />
                    </Link>
                </div>
            </div>
            <div className="bryanGallery">
                <div className="galleryInner">
                    {images.map((el, key) => {
                        return <img src={el.img} key={el.id} className="p_imgs"></img>
                    })}
                </div>
            </div>
            {props.bryanGallery ? (
                <BryanGallery
                    images={images}
                    bryanGallery={props.bryanGallery}
                    expandBryanGallery={props.expandBryanGallery} />
            ) : null }
        </BryanWrap>
    )
}

export default Bryan;