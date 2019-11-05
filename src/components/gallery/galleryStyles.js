import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const GalleryWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    padding: 40px;
    height: 800px;
    box-shadow: 0px 0px 20px #CACACA;

    h1 {
        font-family: ${fonts.primary};
        font-weight: 600;
        font-size: 40px;
        color: #414141;
    }
`;