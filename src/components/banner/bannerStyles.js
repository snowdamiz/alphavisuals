import styled from 'styled-components';
import Banner from '../../assets/banner.jpg';
import arrow from '../../assets/down_arrow.svg';

import { media, fonts } from '../../variables';

export const BannerWrap = styled.div`
    width: 100%;
    height: 100vh;
    background: url('${Banner}');
    background-position: center; 
    background-size: cover;
    z-index: -1;
    // margin-top: -80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .bannerInner {
        margin-top: -40px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    h1 {
        color: white;
        font-family: ${fonts.test1};
        font-size: 60px;
        text-shadow: 0 0 30px black;
        margin-top: 60px;

        ${media.mobile} { font-size: 62px; }
        ${media.largeMb} { font-size: 65px; }
        ${media.tablet} { font-size: 68px; }
        ${media.largeTb} { font-size: 80px;}
        ${media.desktop} { font-size: 86px; }
        ${media.largeDt} { font-size: 90px; }
        ${media.modern} { font-size: 100px; }
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
        margin-top: 28px;
        // margin-left: 60px;
        color: white;
        font-family: ${fonts.test4};
        font-size: 34px;
        text-shadow: 0 0 30px black;

        ${media.tablet} {
            font-size: 38px;
            margin-top: 32px;
        }

        ${media.largeTb} {
            font-size: 42px;
            margin-top: 42px;
        }

        ${media.desktop} {
            font-size: 46px;
            margin-top: 48px;
        }

        ${media.largeDt} {
            font-size: 48px;
            margin-top: 56px;
        }

        ${media.modern} { 
            font-size: 52px;
            margin-top: 62px;
        }
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
            opacity: 0.6;
            cursor: pointer;

            &:hover {
                opacity: 1;
                
            }
        }

    }
`;