import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import IMG1 from '../../../assets/jonny/IMG1_thumbnail.jpg';
import IMG2 from '../../../assets/jonny/IMG2_thumbnail.jpg';
import IMG3 from '../../../assets/jonny/IMG3_thumbnail.jpg';
import IMG4 from '../../../assets/jonny/IMG4_thumbnail.jpg';
import IMG5 from '../../../assets/jonny/IMG5_thumbnail.jpg';
import IMG6 from '../../../assets/jonny/IMG6_thumbnail.jpg';
import IMG7 from '../../../assets/jonny/IMG7_thumbnail.jpg';
import IMG8 from '../../../assets/jonny/IMG8_thumbnail.jpg';
import IMG9 from '../../../assets/jonny/IMG9_thumbnail.jpg';

import IMG1_medium from '../../../assets/jonny/IMG1_medium.jpg';
import IMG2_medium from '../../../assets/jonny/IMG2_medium.jpg';
import IMG3_medium from '../../../assets/jonny/IMG3_medium.jpg';
import IMG4_medium from '../../../assets/jonny/IMG4_medium.jpg';
import IMG5_medium from '../../../assets/jonny/IMG5_medium.jpg';
import IMG6_medium from '../../../assets/jonny/IMG6_medium.jpg';
import IMG7_medium from '../../../assets/jonny/IMG7_medium.jpg';
import IMG8_medium from '../../../assets/jonny/IMG8_medium.jpg';
import IMG9_medium from '../../../assets/jonny/IMG9_medium.jpg';
import NextBtn from '../../../assets/nextBtn.svg';
import PrevBtn from '../../../assets/prevBtn.svg';
import JonnyGallery from './jonnyGallery';
import { JonnyWrap } from './jonnyStyles';

function Jonny (props) {
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
        {id: 9, img: IMG9_medium},
    ]

    return (
        <JonnyWrap id="jonny">
            <div className="profile">
                <div className="image"></div>
                <h2>Nicole</h2>
                <p>Hello! My name is Nicole Lenz. I am based out of Vancouver, Washington and I have been shooting since 2015.
                    Photography to me is a lifestyle and not just a hobby.
                    {props.jonnyText ? (
                        <span>
                            I absolutely love being able to capture who people are, and the beauty a single image can hold.
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
                    largeImages={largeImages}
                    jonnyGallery={props.jonnyGallery}
                    expandJonnyGallery={props.expandJonnyGallery} />
            ) : null }
        </JonnyWrap>
    )
}

export default Jonny;