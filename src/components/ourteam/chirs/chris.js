import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import chrisIMG_01 from '../../../assets/chris/chrisIMG_01_thumbnail.jpg';
import chrisIMG_02 from '../../../assets/chris/chrisIMG_02_thumbnail.jpg';
import chrisIMG_03 from '../../../assets/chris/chrisIMG_03_thumbnail.jpg';
import chrisIMG_04 from '../../../assets/chris/chrisIMG_04_thumbnail.jpg';
import chrisIMG_05 from '../../../assets/chris/chrisIMG_05_thumbnail.jpg';
import chrisIMG_06 from '../../../assets/chris/chrisIMG_06_thumbnail.jpg';
import chrisIMG_07 from '../../../assets/chris/chrisIMG_07_thumbnail.jpg';
import chrisIMG_08 from '../../../assets/chris/chrisIMG_08_thumbnail.jpg';
import chrisIMG_09 from '../../../assets/chris/chrisIMG_09_thumbnail.jpg';
import chrisIMG_10 from '../../../assets/chris/chrisIMG_10_thumbnail.jpg';
import chrisIMG_11 from '../../../assets/chris/chrisIMG_11_thumbnail.jpg';
import chrisIMG_12 from '../../../assets/chris/chrisIMG_12_thumbnail.jpg';

import chrisIMG_01_medium from '../../../assets/chris/chrisIMG_01_medium.jpg';
import chrisIMG_02_medium from '../../../assets/chris/chrisIMG_02_medium.jpg';
import chrisIMG_03_medium from '../../../assets/chris/chrisIMG_03_medium.jpg';
import chrisIMG_04_medium from '../../../assets/chris/chrisIMG_04_medium.jpg';
import chrisIMG_05_medium from '../../../assets/chris/chrisIMG_05_medium.jpg';
import chrisIMG_06_medium from '../../../assets/chris/chrisIMG_06_medium.jpg';
import chrisIMG_07_medium from '../../../assets/chris/chrisIMG_07_medium.jpg';
import chrisIMG_08_medium from '../../../assets/chris/chrisIMG_08_medium.jpg';
import chrisIMG_09_medium from '../../../assets/chris/chrisIMG_09_medium.jpg';
import chrisIMG_10_medium from '../../../assets/chris/chrisIMG_10_medium.jpg';
import chrisIMG_11_medium from '../../../assets/chris/chrisIMG_11_medium.jpg';
import chrisIMG_12_medium from '../../../assets/chris/chrisIMG_12_medium.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import ChrisGallery from './chrisGallery';
import { ChrisWrap } from './chrisStyles';

function Chris (props) {
    const images = [
        {id: 1, img: chrisIMG_01},
        {id: 2, img: chrisIMG_02},
        {id: 3, img: chrisIMG_03},
        {id: 4, img: chrisIMG_04},
        {id: 5, img: chrisIMG_05},
        {id: 6, img: chrisIMG_06},
        {id: 7, img: chrisIMG_07},
        {id: 8, img: chrisIMG_08},
        {id: 9, img: chrisIMG_09},
        {id: 10, img: chrisIMG_10},
        {id: 11, img: chrisIMG_11},
        {id: 12, img: chrisIMG_12},
    ]

    const largeImages = [
        {id: 1, img: chrisIMG_01_medium},
        {id: 2, img: chrisIMG_02_medium},
        {id: 3, img: chrisIMG_03_medium},
        {id: 4, img: chrisIMG_04_medium},
        {id: 5, img: chrisIMG_05_medium},
        {id: 6, img: chrisIMG_06_medium},
        {id: 7, img: chrisIMG_07_medium},
        {id: 8, img: chrisIMG_08_medium},
        {id: 9, img: chrisIMG_09_medium},
        {id: 10, img: chrisIMG_10_medium},
        {id: 11, img: chrisIMG_11_medium},
        {id: 12, img: chrisIMG_12_medium},
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