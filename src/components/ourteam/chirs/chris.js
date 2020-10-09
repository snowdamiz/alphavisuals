import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../../assets/chris/IMG1_thumbnail.jpg';
import IMG2 from '../../../assets/chris/IMG2_thumbnail.jpg';
import IMG3 from '../../../assets/chris/IMG3_thumbnail.jpg';
import IMG4 from '../../../assets/chris/IMG4_thumbnail.jpg';
import IMG5 from '../../../assets/chris/IMG5_thumbnail.jpg';
import IMG6 from '../../../assets/chris/IMG6_thumbnail.jpg';
import IMG7 from '../../../assets/chris/IMG7_thumbnail.jpg';
import IMG8 from '../../../assets/chris/IMG8_thumbnail.jpg';
import IMG9 from '../../../assets/chris/IMG9_thumbnail.jpg';

import IMG1_medium from '../../../assets/chris/IMG1_medium.jpg';
import IMG2_medium from '../../../assets/chris/IMG2_medium.jpg';
import IMG3_medium from '../../../assets/chris/IMG3_medium.jpg';
import IMG4_medium from '../../../assets/chris/IMG4_medium.jpg';
import IMG5_medium from '../../../assets/chris/IMG5_medium.jpg';
import IMG6_medium from '../../../assets/chris/IMG6_medium.jpg';
import IMG7_medium from '../../../assets/chris/IMG7_medium.jpg';
import IMG8_medium from '../../../assets/chris/IMG8_medium.jpg';
import IMG9_medium from '../../../assets/chris/IMG9_medium.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import ChrisGallery from './chrisGallery';
import { ChrisWrap } from './chrisStyles';

function Chris (props) {
    const images = [
        {id: 1, img: IMG1},
        {id: 2, img: IMG2},
        {id: 3, img: IMG3},
        {id: 4, img: IMG4},
        {id: 5, img: IMG5},
        {id: 6, img: IMG6},
        {id: 7, img: IMG7},
        {id: 8, img: IMG8},
        {id: 9, img: IMG9},
    ]

    const largeImages = [
        {id: 1, img: IMG1_medium},
        {id: 2, img: IMG2_medium},
        {id: 3, img: IMG3_medium},
        {id: 4, img: IMG4_medium},
        {id: 5, img: IMG5_medium},
        {id: 6, img: IMG6_medium},
        {id: 7, img: IMG7_medium},
        {id: 8, img: IMG8_medium},
        {id: 9, img: IMG9_medium},

    ]

    return (
        <ChrisWrap id="chris">
            <div className="profile">
                <div className="image"></div>
                <h2>Chris</h2>
                <p>Hey! My name is Chris. I grew up in sunny San Diego and
                    moved up here to the PNW about 4 years ago. Car culture has 
                    always been a part of my life.
                    {props.chrisText ? (
                        <span>
                            So simply put, I’m a car 
                            enthusiast with a camera. Cars aside, photography has been a 
                            passion of mine since high school and shows no signs of stopping 
                            anytime soon. 
                        </span>
                    ) : null }
                </p>
                <button onClick={props.expandChrisText}>{props.chrisText ? "Close" : "Learn More"}</button>
                <button onClick={props.expandChrisGallery} className="viewGallery">View Gallery</button>
                <div className="profileNav">
                    <Link smooth to="/#bryan" className="nextBtn">
                        <img src={PrevBtn} className="prev" />
                    </Link>
                    <Link smooth to="/#jonny" className="nextBtn">
                        <img src={NextBtn} className="next" />
                    </Link>
                </div>
            </div>
            <div className="chrisGallery">
                <div className="galleryInner">
                    {images.map((el, key) => {
                        return <img src={el.img} key={el.id} className="p_imgs"></img>
                    })}
                </div>
            </div>
            {props.chrisGallery ? (
                <ChrisGallery
                    images={images}
                    largeImages={largeImages}
                    chrisGallery={props.chrisGallery}
                    expandChrisGallery={props.expandChrisGallery} />
            ) : null }
        </ChrisWrap>
    )
}

export default Chris;