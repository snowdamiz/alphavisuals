import styled from 'styled-components';
import Banner from '../../assets/banner.jpg';
import arrow from '../../assets/down_arrow.svg';

import { media, fonts } from '../../variables';

export const BannerWrap = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid green;
    position: absolute;
    background: url('${Banner}');
    background-position: center; 
    background-size: cover;
    z-index: -1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
        font-family: ${fonts.test1};
        font-size: 100px;
        text-shadow: 0 0 30px black;
        margin-top: 60px;
    }

    .line {
        width: 70px;
        height: 4px;
        border-radius: 3px;
        // border: 2px solid white;
        background-color: white;
        margin-top: 40px;
        box-shadow: 0 0 26px black;
    }

    h2 {
        margin-top: 54px;
        // margin-left: 60px;
        color: white;
        font-family: ${fonts.test4};
        font-size: 42px;
        text-shadow: 0 0 30px black;
    }

    .arrow {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: white;
        opacity: 0.2;
        margin-top: 40px;
        background: url('${arrow}');
    }

    .socials {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 40px;

        img {
            width: 26px;
            height: 26px;
            margin: 0 10px 0 10px;
            -webkit-filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
            filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
        }
    }
`;