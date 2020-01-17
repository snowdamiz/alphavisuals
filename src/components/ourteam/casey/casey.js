import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG_01 from '../../../assets/casey/IMG_01_thumbnail.jpg';
import IMG_02 from '../../../assets/casey/IMG_02_thumbnail.jpg';
import IMG_03 from '../../../assets/casey/IMG_03_thumbnail.jpg';
import IMG_04 from '../../../assets/casey/IMG_04_thumbnail.jpg';
import IMG_05 from '../../../assets/casey/IMG_05_thumbnail.jpg';
import IMG_06 from '../../../assets/casey/IMG_06_thumbnail.jpg';
import IMG_07 from '../../../assets/casey/IMG_07_thumbnail.jpg';
import IMG_08 from '../../../assets/casey/IMG_08_thumbnail.jpg';
import IMG_09 from '../../../assets/casey/IMG_09_thumbnail.jpg';
import IMG_10 from '../../../assets/casey/IMG_10_thumbnail.jpg';

import IMG_01_medium from '../../../assets/casey/IMG_01_medium.jpg';
import IMG_02_medium from '../../../assets/casey/IMG_02_medium.jpg';
import IMG_03_medium from '../../../assets/casey/IMG_03_medium.jpg';
import IMG_04_medium from '../../../assets/casey/IMG_04_medium.jpg';
import IMG_05_medium from '../../../assets/casey/IMG_05_medium.jpg';
import IMG_06_medium from '../../../assets/casey/IMG_06_medium.jpg';
import IMG_07_medium from '../../../assets/casey/IMG_07_medium.jpg';
import IMG_08_medium from '../../../assets/casey/IMG_08_medium.jpg';
import IMG_09_medium from '../../../assets/casey/IMG_09_medium.jpg';
import IMG_10_medium from '../../../assets/casey/IMG_10_medium.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import CaseyGallery from './caseyGallery';
import { CaseyWrap } from './caseyStyles';

function Casey (props) {
    const images = [
        {id: 1, img: IMG_01},
        {id: 2, img: IMG_02},
        {id: 3, img: IMG_03},
        {id: 4, img: IMG_04},
        {id: 5, img: IMG_05},
        {id: 6, img: IMG_06},
        {id: 7, img: IMG_07},
        {id: 8, img: IMG_08},
        {id: 9, img: IMG_09},
        {id: 10, img: IMG_10}
    ]

    const largeImages = [
        {id: 1, img: IMG_01_medium},
        {id: 2, img: IMG_02_medium},
        {id: 3, img: IMG_03_medium},
        {id: 4, img: IMG_04_medium},
        {id: 5, img: IMG_05_medium},
        {id: 6, img: IMG_06_medium},
        {id: 7, img: IMG_07_medium},
        {id: 8, img: IMG_08_medium},
        {id: 9, img: IMG_09_medium},
        {id: 10, img: IMG_10_medium}
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