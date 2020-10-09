import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../../assets/casey/IMG1_thumbnail.jpg';
import IMG2 from '../../../assets/casey/IMG2_thumbnail.jpg';
import IMG3 from '../../../assets/casey/IMG3_thumbnail.jpg';
import IMG4 from '../../../assets/casey/IMG4_thumbnail.jpg';
import IMG5 from '../../../assets/casey/IMG5_thumbnail.jpg';
import IMG6 from '../../../assets/casey/IMG6_thumbnail.jpg';
import IMG7 from '../../../assets/casey/IMG7_thumbnail.jpg';
import IMG8 from '../../../assets/casey/IMG8_thumbnail.jpg';
import IMG9 from '../../../assets/casey/IMG9_thumbnail.jpg';
import IMG1_medium from '../../../assets/casey/IMG1_medium.jpg';
import IMG2_medium from '../../../assets/casey/IMG2_medium.jpg';
import IMG3_medium from '../../../assets/casey/IMG3_medium.jpg';
import IMG4_medium from '../../../assets/casey/IMG4_medium.jpg';
import IMG5_medium from '../../../assets/casey/IMG5_medium.jpg';
import IMG6_medium from '../../../assets/casey/IMG6_medium.jpg';
import IMG7_medium from '../../../assets/casey/IMG7_medium.jpg';
import IMG8_medium from '../../../assets/casey/IMG8_medium.jpg';
import IMG9_medium from '../../../assets/casey/IMG9_medium.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import CaseyGallery from './caseyGallery';
import { CaseyWrap } from './caseyStyles';

function Casey (props) {
    const images = [
        {id: 1, img: IMG1},
        {id: 2, img: IMG2},
        {id: 3, img: IMG3},
        {id: 4, img: IMG4},
        {id: 5, img: IMG5},
        {id: 6, img: IMG6},
        {id: 7, img: IMG7},
        {id: 8, img: IMG8},
        {id: 9, img: IMG9}
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
        {id: 9, img: IMG9_medium}
    ]

    return (
        <CaseyWrap id="casey">
            <div className="profile">
                <div className="image"></div>
                <h2>Casey</h2>
                <p>Hello, my names Casey! I'm from Mcminnville, Oregon. I was born and 
                    raised here in the PNW, and have had plenty of time to explore the 
                    Northwest. Photography for me personally, is a way to express how I 
                    feel, to allow me to explore the west coast, and meet locals along 
                    the way.
                    {props.caseyText ? (
                        <span>
                            Photography is such a passion for me, and because of this, 
                            I decided to start a photography company. Not just any company, but
                            one that strives to exceed every requirement you have, for whatever 
                            photoshoot idea you want. Not only do we offer amazing photographers 
                            here local to the Northwest, but ones that are determined to create 
                            amazing works of art, and a friendship at the end. I guarantee an 
                            amazing experience, and I can't wait to work with you!
                        </span>
                    ) : null }
                </p>
                <button onClick={props.expandCaseyText}>{props.caseyText ? "Close" : "Learn More"}</button>
                <button onClick={props.expandCaseyGallery} className="viewGallery">View Gallery</button>
                <div className="profileNav">
                    <Link smooth to="/#services" className="nextBtn">
                        <img src={PrevBtn} className="prev" />
                    </Link>
                    <Link smooth to="/#bryan" className="nextBtn">
                        <img src={NextBtn} className="next" />
                    </Link>
                </div>
            </div>
            <div className="caseyGallery">
                <div className="galleryInner">
                    {images.map((el, key) => {
                        return <img src={el.img} key={el.id} className="p_imgs"></img>
                    })}
                </div>
            </div>
            {props.caseyGallery ? (
                <CaseyGallery
                    images={images}
                    largeImages={largeImages}
                    caseyGallery={props.caseyGallery}
                    expandCaseyGallery={props.expandCaseyGallery} />
            ) : null }
        </CaseyWrap>
    )
}

export default Casey;