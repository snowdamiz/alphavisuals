import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

import placeholder from '../../assets/placeholder.jpg';

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
        padding: 50px 30px;
        // border: 1px solid orange;

        ${media.tablet} { padding: 60px 0; }
        ${media.largeTb} { padding: 90px 0; }        
        ${media.desktop} {
            max-width: 1000px;
            padding: 120px 0;
            // border: 1px solid purple;
        }
    }

    .img_border {
        width: 140px;
        height: 140px;
        // border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;

        ${media.mobile} {
            width: 180px;
            height: 180px;
            // border: 1px solid blue;
        }

        ${media.tablet} {
            width: 250px;
            height: 250px;
            // border: 1px solid green;
        }

        .img {
            width: 90%;
            height: 90%;
            // border: 1px solid blue;
            cursor: pointer;
            background: url('${placeholder}');
            background-size: cover;

            &:hover {
                width: 100%;
                height: 100%;
                box-shadow: 0 4px 10px #E2E2E2;
            }
        }
    }
`;