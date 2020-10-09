import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../../assets/bryan/IMG1_thumbnail.jpg';
import IMG2 from '../../../assets/bryan/IMG2_thumbnail.jpg';
import IMG3 from '../../../assets/bryan/IMG3_thumbnail.jpg';
import IMG4 from '../../../assets/bryan/IMG4_thumbnail.jpg';
import IMG5 from '../../../assets/bryan/IMG5_thumbnail.jpg';
import IMG6 from '../../../assets/bryan/IMG6_thumbnail.jpg';
import IMG7 from '../../../assets/bryan/IMG7_thumbnail.jpg';
import IMG8 from '../../../assets/bryan/IMG8_thumbnail.jpg';
import IMG9 from '../../../assets/bryan/IMG9_thumbnail.jpg';

import IMG1_medium from '../../../assets/bryan/IMG1_medium.jpg';
import IMG2_medium from '../../../assets/bryan/IMG2_medium.jpg';
import IMG3_medium from '../../../assets/bryan/IMG3_medium.jpg';
import IMG4_medium from '../../../assets/bryan/IMG4_medium.jpg';
import IMG5_medium from '../../../assets/bryan/IMG5_medium.jpg';
import IMG6_medium from '../../../assets/bryan/IMG6_medium.jpg';
import IMG7_medium from '../../../assets/bryan/IMG7_medium.jpg';
import IMG8_medium from '../../../assets/bryan/IMG8_medium.jpg';
import IMG9_medium from '../../../assets/bryan/IMG9_medium.jpg';
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
    ]

    const largeImages = [
        { id: 1, img: IMG1_medium },
        { id: 2, img: IMG2_medium },
        { id: 3, img: IMG3_medium },
        { id: 4, img: IMG4_medium },
        { id: 5, img: IMG5_medium },
        { id: 7, img: IMG7_medium },
        { id: 6, img: IMG6_medium },
        { id: 8, img: IMG8_medium },
        { id: 9, img: IMG9_medium },
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
                    largeImages={largeImages}
                    bryanGallery={props.bryanGallery}
                    expandBryanGallery={props.expandBryanGallery} />
            ) : null }
        </BryanWrap>
    )
}

export default Bryan;