import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG_01 from '../../../assets/jonny/IMG_01.jpg';
import IMG_02 from '../../../assets/jonny/IMG_02.jpg';
import IMG_03 from '../../../assets/jonny/IMG_03.jpg';
import IMG_04 from '../../../assets/jonny/IMG_04.jpg';
import IMG_05 from '../../../assets/jonny/IMG_05.jpg';
import IMG_06 from '../../../assets/jonny/IMG_06.jpg';
import IMG_07 from '../../../assets/jonny/IMG_07.jpg';
import IMG_08 from '../../../assets/jonny/IMG_08.jpg';
import IMG_09 from '../../../assets/jonny/IMG_09.jpg';
import IMG_10 from '../../../assets/jonny/IMG_10.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import JonnyGallery from './jonnyGallery';
import { JonnyWrap } from './jonnyStyles';

function Jonny (props) {
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

    return (
        <JonnyWrap id="jonny">
            <div className="profile">
                <div className="image"></div>
                <h2>Jonny</h2>
                <p>Greetings! My name is Jon Meunier. I'm an amateur photographer 
                    currently residing in Portland, Oregon. From stanced cars, to 
                    purpose built race cars, show cars and everything in between, 
                    I see potential. I've always strived to capture the exact moments 
                    where certain vibes, feelings, or even auras are present. 
                    Whether it be in the form of automotive expression, or portraits 
                    of people's day to day existence, I like to try and capture the 
                    beauty that is life, and put it in an image. 
                    {props.jonnyText ? (
                        <span>
                            I'm far from perfect, but far from where I began. With 
                            the support of my fellow friends here at Alpha Visuals, 
                            I hope that we can continue to grow our passions and 
                            pursuits of happiness, and collaborate them into a 
                            beautiful piece of media for you to enjoy for years to 
                            come!
                        </span>
                    ) : null }
                </p>
                <button onClick={props.expandJonnyText}>{props.jonnyText ? "Close" : "Learn More"}</button>
                <button onClick={props.expandJonnyGallery} className="viewGallery">View Gallery</button>
                <div className="profileNav">
                    <Link smooth to="/#chris" className="nextBtn">
                        <img src={PrevBtn} className="prev" />
                    </Link>
                    <Link smooth to="/#chris" className="nextBtn">
                        <img src={NextBtn} className="next" />
                    </Link>
                </div>
            </div>
            <div className="jonnyGallery">
                <div className="galleryInner">
                    {images.map((el, key) => {
                        return <img src={el.img} key={el.id} className="p_imgs"></img>
                    })}
                </div>
            </div>
            {props.jonnyGallery ? (
                <JonnyGallery
                    images={images}
                    jonnyGallery={props.jonnyGallery}
                    expandJonnyGallery={props.expandJonnyGallery} />
            ) : null }
        </JonnyWrap>
    )
}

export default Jonny;