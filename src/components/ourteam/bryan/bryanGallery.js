import React, { useState } from 'react';
import Close from '../../../assets/close.svg';
import { BryanGalleryWrap, ImgView } from './bryanGalleryStyles';

function BryanGallery (props) {
    const [imgSize, setImgSize] = useState(0);
    const [img, setImg] = useState(null);

    const expandImg = (img) => {
        setImgSize(1);
        setImg(img);
        console.log(imgSize)
        console.log(img);
    }

    const closeImg = () => {
        setImg(null);
    }

    return (
        <BryanGalleryWrap>
            <div className="galleryHeading">
                <h2>Bryan's Gallery</h2>
                <img src={Close} onClick={props.expandBryanGallery} />
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
        </BryanGalleryWrap>
    )
}

export default BryanGallery;