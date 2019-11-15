import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const GalleryWrap = styled.div`
    width: 100%;
    box-shadow: 0px 0px 20px #CACACA;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: colum nowrap;

    .inner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 70px 30px;
        // border: 1px solid orange;

        ${media.tablet} { padding: 80px 0; }
        ${media.largeTb} { padding: 90px 0; }        
        ${media.desktop} {
            max-width: 1000px;
            padding: 120px 0;
            // border: 1px solid purple;
        }
    }

    .img_border {
        width: 150px;
        height: 150px;
        border: 1px solid red;

        ${media.mobile} {
            width: 180px;
            height: 180px;
            border: 1px solid blue;
        }

        ${media.tablet} {
            width: 250px;
            height: 250px;
            border: 1px solid green;
        }
    }
`;