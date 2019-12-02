import React, { useState } from 'react';
import Close from '../../../assets/close.svg';
import { ChrisGalleryWrap, ImgView } from './chrisGalleryStyles';

function ChrisGallery (props) {
    const [imgSize, setImgSize] = useState(0);
    const [img, setImg] = useState(null);

    const expandImg = (img) => {
        setImgSize(1);
        setImg(img);
    }

    const closeImg = () => setImg(null)

    return (
        <ChrisGalleryWrap>
            <div className="galleryHeading">
                <h2>Chris's Gallery</h2>
                <img src={Close} onClick={props.expandChrisGallery} />
            </div>
            <div className="galleryInner">
                {props.images.map((el, key) => {
                    return <img 
                                src={el.img}
                                key={el.id}
                                className="p_imgs"
                                onClick={() => expandImg(el.img)}></img>
                })}
            </div>
            {img ? (
                <ImgView>
                    <div className="imgHeading">
                        <img src={Close} onClick={closeImg} />
                    </div>
                    <img src={img} className="img" />
                </ImgView>
            ) : null }
        </ChrisGalleryWrap>
    )
}

export default ChrisGallery;